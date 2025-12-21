import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);
  const toastr = inject(ToastrService);
  const authService = inject(AuthService);

  return next(req).pipe(
  
     catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An error occurred';
      
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = error.error.message;
      } else {
        // Server-side error
        switch (error.status) {
          case 0:
            errorMessage = 'Network error. Please check your connection.';
            break;
          case 400:
            errorMessage = error.error?.message || 'Invalid request.';
            break;
          case 401:
            errorMessage = 'Session expired. Please login again.';
            authService.logout();
            router.navigate(['/auth/login']);
            break;
          case 403:
            errorMessage = 'You do not have permission to perform this action.';
            break;
          case 404:
            errorMessage = 'Resource not found.';
            break;
          case 409:
            errorMessage = error.error?.message || 'Conflict occurred.';
            break;
          case 422:
            errorMessage = 'Validation failed. Please check your input.';
            break;
          case 500:
            errorMessage = 'Server error. Please try again later.';
            break;
          default:
            errorMessage = error.error?.message || `Error ${error.status}: ${error.statusText}`;
        }
      }
      
      toastr.error(errorMessage, 'Error');
      return throwError(() => error);
    })
  );
 
};
