import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalesComponent } from 'projects/exp-clinico-gui/src/app/modules/hospitales/components/hospitales.component';

const routes: Routes = [
  {
    path: '',
    component: HospitalesComponent
  },
  {
    path:':idHospital/pacientes',
    loadChildren: () => import('projects/exp-clinico-gui/src/app/modules/pacientes/pacientes.module').then(m => m.PacientesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalesRoutingModule {
}
