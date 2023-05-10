import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from 'projects/exp-clinico-gui/src/app/layout/private/components/private.component';

const routes: Routes = [
  {
    path: '', component: PrivateComponent, children: [
      {
        path: '',
        redirectTo: 'hospitals',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'hospitals',
        loadChildren: () => import('../../features/hospitals/hospitals.module').then(m => m.HospitalsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {
}
