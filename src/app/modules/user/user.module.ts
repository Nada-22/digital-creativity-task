import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SharedComponentsModule } from 'src/app/shared/shared.module';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from 'src/app/core/store/user/user.producer';
import { UserEffects } from 'src/app/core/store/user/user.effectives';

@NgModule({
  declarations: [
    UsersListComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedComponentsModule,
    TableModule,
    InputTextModule,
 
  ]
})
export class UserModule { }
