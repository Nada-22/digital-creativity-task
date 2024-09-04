import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { HomeComponent } from './modules/layout/home/home.component';
import { LayoutModule } from './modules/layout/layout.module';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivateChild: [authGuard], children: [

      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },

    ]
  },


  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
