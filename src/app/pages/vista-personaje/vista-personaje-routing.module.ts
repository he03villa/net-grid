import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaPersonajeComponent } from './vista-personaje.component';

const routes: Routes = [{ path: '', component: VistaPersonajeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaPersonajeRoutingModule { }
