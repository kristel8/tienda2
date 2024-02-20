import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { AuthGuard } from './auth/services/guards/auth.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [

  {
    path: '', component: LoginComponent,

  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
      },
      {
        path: 'empleados',
        loadChildren: () => import('./modules/empleado/empleado.module').then(m => m.EmpleadoModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
