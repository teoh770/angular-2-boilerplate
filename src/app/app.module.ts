import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from '../controllers/authentication/authentication.module';

import { AppComponent } from './app.component';
import { LandingComponent } from '../controllers/landing/landing.component';

import { AppRoutingModule } from './routes.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
