import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritoRoutingModule } from './favorito-routing.module';
import { FavoritoComponent } from './favorito.component';
import { PipeModule } from '../../pipe/pipe.module';


@NgModule({
  declarations: [FavoritoComponent],
  imports: [
    CommonModule,
    FavoritoRoutingModule,
    PipeModule
  ]
})
export class FavoritoModule { }
