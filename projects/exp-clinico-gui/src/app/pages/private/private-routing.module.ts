import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from 'projects/exp-clinico-gui/src/app/pages/private/components/private.component';

const routes: Routes = [ 
  {
    path: '', component: PrivateComponent, children: [
      {
        path: '',
        redirectTo: 'hospitales',
        pathMatch: 'full'
      },
      {
        path: 'hospitales',
        loadChildren: () => import('projects/exp-clinico-gui/src/app/modules/hospitales/hospitales.module').then(m => m.HospitalesModule)
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
