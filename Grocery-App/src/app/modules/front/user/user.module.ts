import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
// import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';

//interceptor
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { TokenInterceptorInterceptor } from '../../../shared/interceptors/token-interceptor.interceptor';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorInterceptor,
    multi: true
  }]
})
export class UserModule { }
