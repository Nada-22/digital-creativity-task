import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { HomeComponent } from './modules/layout/home/home.component';
import { LayoutModule } from './modules/layout/layout.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      // {
      //   path: 'home',
      //   loadComponent: () =>
      //     import('./modules/layout/home/home.component').then((x) => x.HomeComponent),
      // },
      { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },

    ]
  },


  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
