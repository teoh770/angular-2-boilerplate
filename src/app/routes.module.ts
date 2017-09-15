import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent }   from '../controllers/landing/landing.component';
// import { LoginComponent } from '../controllers/authentication/login/login.component';
import { LoginComponent, SignupComponent } from '../controllers/authentication/authentication.module';

const routes: Routes = [
  { path: '', component: LandingComponent, data: { title: 'Angular 2 Boilerplate'} },
  { path: 'login', component: LoginComponent, data: { title: 'Login'} },
  { path: 'signup', component: SignupComponent, data: { title: 'Signup'} }
  // { path: '', redirectTo: 'landing', pathMatch: 'full' },
  // { path: 'landing',  component: LandingComponent, data: { title: 'Landing'} },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
