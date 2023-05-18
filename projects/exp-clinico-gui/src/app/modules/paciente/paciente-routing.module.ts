import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicacionComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/medicacion/medicacion.component";
import { NuevaMedicacionComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/nueva-medicacion/nueva-medicacion.component";
import { CrearPacienteComponent } from "projects/exp-clinico-gui/src/app/modules/pacientes/components/crear-paciente/crear-paciente.component";
import { NotaEvolucionComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/nota-evolucion/nota-evolucion.component";
import { PacienteDetallesComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/paciente-detalles/paciente-detalles.component";
import { PacienteComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/components/paciente/paciente.component';
import { ResumenComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/resumen/resumen.component";

const routes: Routes = [
  {
    path: '',
    component: PacienteComponent,
    children: [
      {
        path: 'resumen', component: ResumenComponent
      },
      {
        path: 'nota-evolucion', component: NotaEvolucionComponent
      },
      {
        path: 'detalles', component: PacienteDetallesComponent
      },
      {
        path: 'medicacion', component: MedicacionComponent
      },
      {
        path: 'nueva-medicacion', component: NuevaMedicacionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule {
}
