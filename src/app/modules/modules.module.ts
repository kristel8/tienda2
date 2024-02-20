import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';

import { EmpleadoModule } from './empleado/empleado.module';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardModule,
    EmpleadoModule,
  ],
  exports: [
    CommonModule,
    DashboardModule,
    EmpleadoModule,
  ],
  providers: [MessageService]
})
export class ModulesModule { }
