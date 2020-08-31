import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstModule } from '@/components/first-component/first.module';
import { SecondModule } from '@/components/second-component/second.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FirstModule, SecondModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
