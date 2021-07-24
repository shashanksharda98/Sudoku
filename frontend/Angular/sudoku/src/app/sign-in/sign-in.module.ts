import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SignInRoutingModule } from './sign-in-routing.module';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { SigninPageComponent } from './main/signin-page/signin-page.component';
import { SigninFormComponent } from './main/signin-page/signin-form/signin-form.component';
import { SignupFormComponent } from './main/signin-page/signup-form/signup-form.component';
import { SocialLoginComponent } from './main/signin-page/social-login/social-login.component';




@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SigninPageComponent,
    SigninFormComponent,
    SignupFormComponent,
    SocialLoginComponent
    
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class SignInModule { }
