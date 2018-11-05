import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageModule } from './message/message.module';
import { RestModule } from './rest/rest.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessageModule,
    RestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
