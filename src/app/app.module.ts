import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WheelsComponent } from './components/wheels/wheels.component';
import Wheels from './modals/wheel'

@NgModule({
  declarations: [
    AppComponent,
    WheelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Wheels],
  bootstrap: [AppComponent]
})
export class AppModule { }
