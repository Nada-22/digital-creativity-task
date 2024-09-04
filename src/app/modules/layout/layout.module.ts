import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout.component';
import { SharedComponentsModule } from 'src/app/shared/shared.module';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { FeatureBarComponent } from './feature-bar/feature-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    FeatureBarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedComponentsModule,
    AvatarModule,
    MenuModule
  ],
  exports:[
    // HomeComponent,
    // LayoutComponent,
    
  ]
})
export class LayoutModule { }
