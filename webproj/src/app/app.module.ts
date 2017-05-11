import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {RouterModule, Routes} from '@angular/router';
// import { routes } from './app.routes';

import {FirebaseService} from './services/firebase.service';
import { AuthGuard } from './auth.service';
import {HttpService} from './services/http.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { MembersComponent } from './components/members/members.component';
import { GamesComponent } from './components/games/games.component';
import { PostComponent } from './components/post/post.component';
import { GetlfgComponent } from './components/getlfg/getlfg.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';
import { BlockComponent } from './components/block/block.component';
import { ResetpwComponent } from './components/resetpw/resetpw.component';
import { ResetpgComponent } from './components/resetpg/resetpg.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyA0iVG0GCYfsxUB4bN1g_dsWnCocpxITZY',
  authDomain: 'webproject-5d802.firebaseapp.com',
  databaseURL: 'https://webproject-5d802.firebaseio.com',
  storageBucket: 'webproject-5d802.appspot.com',
  messagingSenderId: '347610163429'
};

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path:'listing/:id', component:ListingComponent},
  {path: 'add-listing', component:AddListingComponent},
  {path:'edit-listing/:id', component:EditListingComponent},
  {path:'games', component:GamesComponent},
  { path:'getLFG', component:GetlfgComponent},
  {path:'postLFG', component:PostComponent},
  { path: '', redirectTo: '/postLFG', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'block', component: BlockComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  { path: 'resetpw', component: ResetpwComponent },
  { path: 'resetpg', component: ResetpgComponent }
]

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    GamesComponent,
    PostComponent,
    GetlfgComponent,
    AdvertiseComponent,
    BlockComponent,
    ResetpwComponent,
    ResetpgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService, AuthGuard, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
