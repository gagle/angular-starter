import { NgModule } from '@angular/core';

import { FirstComponent } from './first.component';

@NgModule({
  declarations: [FirstComponent],
  exports: [FirstComponent]
})
export class FirstModule {}
