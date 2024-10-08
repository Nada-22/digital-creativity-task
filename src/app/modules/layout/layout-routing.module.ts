import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout.component';
import { authGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  // {
  //   // path: '', component: LayoutComponent, children: [

  //   //   { path: '', redirectTo: 'home', pathMatch: 'full' },
  //   //   { path: 'home', component: HomeComponent }
  //   // ]

  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
