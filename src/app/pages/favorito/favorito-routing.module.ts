import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritoComponent } from './favorito.component';

const routes: Routes = [{ path: '', component: FavoritoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritoRoutingModule { }
