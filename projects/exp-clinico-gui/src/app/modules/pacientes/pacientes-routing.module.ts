import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPacienteComponent } from "projects/exp-clinico-gui/src/app/modules/pacientes/components/crear-paciente/crear-paciente.component";
import { ListaPacientesComponent } from "projects/exp-clinico-gui/src/app/modules/pacientes/components/lista-pacientes/lista-pacientes.component";

import { PacientesComponent } from 'projects/exp-clinico-gui/src/app/modules/pacientes/components/pacientes/pacientes.component';

const routes: Routes = [
  {
    path: '',
    component: PacientesComponent, children: [
      {
        path: '', component: ListaPacientesComponent
      },
      {
        path: 'crear-paciente', component: CrearPacienteComponent
      },
    ]
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
