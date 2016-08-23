import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HelloWorld }  from './HelloWorld.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HelloWorld ],
  bootstrap:    [ HelloWorld ]
})
export class AppModule { }