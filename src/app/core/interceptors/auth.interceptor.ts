import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  var authService = inject(AuthService);
  const token = authService.getToken();
  const apiUrl = environment.apiUrl;

  if (token && req.url.startsWith(apiUrl)) {
    const authReq = req.clone({
      setHeaders: { Authorization: 'Bearer ' + token }
    });
console.log("Interceptor called : "+apiUrl);
    return next(authReq);
  }
  else {
    return next(req);
  }

};
