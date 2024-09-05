import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SharedComponentsModule } from 'src/app/shared/shared.module';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    SidebarModule,
    DropdownModule,
    InputSwitchModule,
    FormsModule,
    ReactiveFormsModule
 
  ]
})
export class UserModule { }
