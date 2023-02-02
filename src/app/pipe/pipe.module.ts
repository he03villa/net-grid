import { NgModule } from '@angular/core';
import { ShortDomainPipe } from './short-domain.pipe';



@NgModule({
  declarations: [ShortDomainPipe],
  exports: [ShortDomainPipe],
})
export class PipeModule { }
