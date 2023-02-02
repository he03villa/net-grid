import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardHomeRoutingModule } from './dashboard-home-routing.module';
import { DashboardHomeComponent } from './dashboard-home.component';
import { FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/pipe/pipe.module';


@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    DashboardHomeRoutingModule,
    FormsModule,
    PipeModule
  ]
})
export class DashboardHomeModule { }
