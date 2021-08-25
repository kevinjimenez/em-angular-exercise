import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardWrapperComponent } from './dashboard-wrapper/dashboard-wrapper.component';

@NgModule({
  declarations: [DashboardWrapperComponent],
  imports: [CommonModule],
  exports: [DashboardWrapperComponent],
})
export class DashboardsModule { }
