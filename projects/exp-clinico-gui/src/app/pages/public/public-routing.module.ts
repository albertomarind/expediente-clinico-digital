import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from 'projects/exp-clinico-gui/src/app/pages/public/components/public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '', pathMatch: 'full',
        loadChildren: () => import('../../modules/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../modules/login/login.module').then(m => m.LoginModule)
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
