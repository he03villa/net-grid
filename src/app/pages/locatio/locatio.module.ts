import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocatioRoutingModule } from './locatio-routing.module';
import { LocatioComponent } from './locatio.component';


@NgModule({
  declarations: [LocatioComponent],
  imports: [
    CommonModule,
    LocatioRoutingModule
  ]
})
export class LocatioModule { }
