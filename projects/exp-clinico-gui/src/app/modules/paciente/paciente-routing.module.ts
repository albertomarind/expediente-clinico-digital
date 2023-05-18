import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicacionComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/medicacion/medicacion.component";
import { NuevaMedicacionComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/nueva-medicacion/nueva-medicacion.component";
import { PruebasDiagnosticasComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/pruebas-diagnosticas/pruebas-diagnosticas.component";
import { VerPeticionComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/ver-peticion/ver-peticion.component";
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
      {
        path: 'pruebas-diagnosticas', component: PruebasDiagnosticasComponent
      },
      {
        path: 'ver-peticion', component: VerPeticionComponent
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
