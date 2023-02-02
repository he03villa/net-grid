import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocatioComponent } from './locatio.component';

const routes: Routes = [{ path: '', component: LocatioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocatioRoutingModule { }
