import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { HintsComponent } from './components/hints/hints.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,    
    LoginComponent,
    ForgotPasswordComponent,
    AdminProfileComponent,
    UserProfileComponent,
    ChatComponent,
    MetricsComponent,
    RegisterComponent,
    HintsComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      preventDuplicates:true,
      timeOut:2000
    }) // ToastrModule added   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
