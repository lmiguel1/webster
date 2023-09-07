import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { HintsComponent } from './components/hints/hints.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SelectProfileComponent } from './components/select-profile/select-profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full'},
  { path: 'main-page', component: MainPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'admin-profile', component: AdminProfileComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'metrics', component: MetricsComponent},
  { path: 'hints', component: HintsComponent},
  { path: 'verify-email', component: VerifyEmailComponent},
  { path: 'select-profile', component: SelectProfileComponent},
  { path: '**', redirectTo: 'main-page', pathMatch: 'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
