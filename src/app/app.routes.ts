import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout/main-layout.component';
import { Component } from '@angular/core';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout/auth-layout.component';
import { ManageUsersComponent } from './modules/admin/manage-users/manage-users.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent, // canActivate : [authGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadComponent: () => import('./modules/dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent) },
            {
                path: 'contests',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./modules/contests/contest-list/contest-list/contest-list.component').then(m => m.ContestListComponent)
                    },
                    {
                        path: ':Id',
                        loadComponent: () => import('./modules/contests/contest-detail/contest-detail/contest-detail.component').then(m => m.ContestDetailComponent)
                    },
                    {
                        path: 'join/:id',
                        loadComponent: () => import('./modules/contests/join-contest/join-contest/join-contest.component').then(m => m.JoinContestComponent)
                    }
                ]
            },
            {
                path: 'my-contests',
                children: [
                    {
                        path: '', loadComponent: () => import('./modules/my-contests/my-contest-list/my-contest-list/my-contest-list.component').then(m => m.MyContestListComponent)
                    },
                    {
                        path: 'history',
                        loadComponent: () => import('./modules/my-contests/contest-history/contest-history/contest-history.component').then(m => m.ContestHistoryComponent)
                    }
                ]
            },
            {
                path: 'admin',
                children: [
                    {
                        path: '', loadComponent: () => import('./modules/admin/admin-dashboard/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
                    },
                    {
                        path: 'create-contest', loadComponent: () => import('./modules/admin/create-contest/create-contest/create-contest.component').then(m => m.CreateContestComponent)
                    },
                    {
                        path: 'manage-contests', loadComponent: () => import('./modules/admin/manage-contests/manage-contests/manage-contests.component').then(m => m.ManageContestsComponent)
                    },
                    {
                        path : 'manage-users' , loadComponent : () => import('./modules/admin/manage-users/manage-users.component').then(m => m.ManageUsersComponent)
                    },
                    {
                        path: 'declare-winners', loadComponent: () => import('./modules/admin/declare-winners/declare-winners/declare-winners.component').then(m => m.DeclareWinnersComponent)
                    },

                ]
            },
            {
                path: 'wallet',
                children: [
                    {
                        path: '', loadComponent: () => import('./modules/wallet/wallet-dashboard/wallet-dashboard/wallet-dashboard.component').then(m => m.WalletDashboardComponent)
                    },
                    {
                        path: 'add-points', loadComponent: () => import('./modules/wallet/add-points/add-points/add-points.component').then(m => m.AddPointsComponent)
                    }
                ]
            },
            {
                path: 'transactions',
                children: [
                    {
                        path: '', loadComponent: () => import('./modules/transactions/transaction-list/transaction-list/transaction-list.component').then(m => m.TransactionListComponent)
                    },
                    {
                        path: ':id', loadChildren: () => import('./modules/transactions/transaction-detail/transaction-detail/transaction-detail.component').then(m => m.TransactionDetailComponent)
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./modules/profile/profile-view/profile-view/profile-view.component').then(m => m.ProfileViewComponent)
                    },
                    {
                        path: 'edit',
                        loadComponent: () => import('./modules/profile/profile-edit/profile-edit/profile-edit.component').then(m => m.ProfileEditComponent)
                    },
                    {
                        path: 'change-password',
                        loadComponent: () => import('./modules/profile/change-password/change-password/change-password.component').then(m => m.ChangePasswordComponent)
                    }
                ]
            },
            {
                path: 'winners',
                loadComponent: () => import('./modules/winners/winners-list/winners-list/winners-list.component').then(m => m.WinnersListComponent)
            },
            {
                path: 'settings',
                loadComponent: () => import('./modules/settings/settings-main/settings-main/settings-main.component').then(m => m.SettingsMainComponent)
            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent, //canActivate : [authGuard , roleGuard],
        children: [
            {
                path: 'login',
                loadComponent: () => import('./modules/auth/login/login/login.component').then(m => m.LoginComponent)
            },
            {
                path: 'register',
                loadComponent: () => import('./modules/auth/register/register/register.component').then(m => m.RegisterComponent)
            },
            {
                path: 'forgot-password',
                loadComponent: () => import('./modules/auth/forgot-password/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
            }
        ]
    } ,
    {
        // Always Write this code to last of route  angular check sequence
        path: '**', redirectTo: 'dashboard'
    },



];


