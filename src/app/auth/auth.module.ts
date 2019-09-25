import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './index';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

  ]
})
export class AuthModule {}
