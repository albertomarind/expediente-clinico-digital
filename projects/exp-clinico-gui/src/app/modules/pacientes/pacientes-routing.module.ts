import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesComponent } from 'projects/exp-clinico-gui/src/app/modules/pacientes/components/pacientes/pacientes.component';

const routes: Routes = [
  {
    path: '',
    component: PacientesComponent
  },
  {
    path: ':idPatient',
    loadChildren: () => import('projects/exp-clinico-gui/src/app/modules/paciente/paciente.module').then(m => m.PacienteModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule {
}
