import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthguardGuard} from './authguard.guard';
// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {Pedido1Component} from './views/pedido1/pedido1.component';
import {Finca1Component} from './views/finca1/finca1.component';
// const routes: Routes = [
//   {path: '', component: LoginPageComponent},
//   {path: 'login', component: LoginPageComponent},
//   {path: 'register', component: RegisterPageComponent},
//   {path: 'logout', component: LogoutComponent},
//   {path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard]},
//   {path: 'formulario', component: FormularioComponent,canActivate: [AuthguardGuard]},
//   {path: 'home', component: HomePageComponent,canActivate: [AuthguardGuard]},
//   {path: '**', component: NoFoundPageComponent},
// ];


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    //component:DefaultLayoutComponent,canActivate: [AuthguardGuard]
  },
  {
    path: '404',
    component: P404Component,canActivate: [AuthguardGuard],
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    } 
  },
  {
    path: 'pedido1',
    component: Pedido1Component,
    data: {
      title: 'Pedido'
    }
  },
  {
    path: 'finca1',
    component: Finca1Component,
    data: {
      title: 'Finca'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,canActivate: [AuthguardGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
