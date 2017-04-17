import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

import { LoginComponent } from './components/listing/login.component';
import { EmailComponent } from './components/listing/email.component';
import { SignupComponent } from './components/listing/signup.component';
import { MembersComponent } from './components/listing/members.component';

import { AuthGuard } from './auth.service';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path:'listing/:id', component:ListingComponent},
  {path: 'add-listing', component:AddListingComponent},
  {path:'edit-listing/:id', component:EditListingComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }
]


export const routes: ModuleWithProviders = RouterModule.forRoot(router);