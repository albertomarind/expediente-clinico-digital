import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagenComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/imagen/imagen.component";
import { LaboratorioComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/laboratorio/laboratorio.component";
import { MedicacionComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/medicacion/medicacion.component";
import { NuevaMedicacionComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/nueva-medicacion/nueva-medicacion.component";
import { PruebasDiagnosticasComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/pruebas-diagnosticas/pruebas-diagnosticas.component";
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
        path: 'laboratorio', component: LaboratorioComponent
      },
      {
        path: 'imagen', component: ImagenComponent
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
