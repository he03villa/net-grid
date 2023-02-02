import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaPersonajeRoutingModule } from './vista-personaje-routing.module';
import { VistaPersonajeComponent } from './vista-personaje.component';
import { PipeModule } from '../../pipe/pipe.module';


@NgModule({
  declarations: [VistaPersonajeComponent],
  imports: [
    CommonModule,
    VistaPersonajeRoutingModule,
    PipeModule
  ]
})
export class VistaPersonajeModule { }
