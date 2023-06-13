import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasoMedicoLegalComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/caso-medico-legal/caso-medico-legal.component";
import { CursoClinicoComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/curso-clinico/curso-clinico.component";
import { ExploracionFisicaComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/exploracion-fisica/exploracion-fisica.component";
import { HemodialisisComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/hemodialisis/hemodialisis.component";
import { HistoriaClinicaPediatricaComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/historia-clinica-pediatrica/historia-clinica-pediatrica.component";
import { HistoriaClinicaTorretcComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/historia-clinica-torretc/historia-clinica-torretc.component";
import { ListaNotasComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/lista-notas/lista-notas.component";
import { NotaEvolucionUtiUccComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/nota-evolucion-uti-ucc/nota-evolucion-uti-ucc.component";
import { NotaEvolutivoComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/nota-evolutivo/nota-evolutivo.component";
import { NotaInterconsultaComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/nota-interconsulta/nota-interconsulta.component";
import { NotaInterrogatorioComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/nota-interrogatorio/nota-interrogatorio.component";
import { OncologiaComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/oncologia/oncologia.component";
import { EpisodioActualComponent } from './episodio-actual.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodioActualComponent,
    children: [
      {
        path: '', component: ListaNotasComponent
      },
      {
        path: 'interrogatorio', component: NotaInterrogatorioComponent
      },
      {
        path: 'evolutivo', component: NotaEvolutivoComponent
      },
      {
        path: 'exploracion-fisica', component: ExploracionFisicaComponent
      },
      {
        path: 'caso-medico-legal', component: CasoMedicoLegalComponent
      },
      {
        path: 'historia-clinica-pediatrica', component: HistoriaClinicaPediatricaComponent
      },
      {
        path: 'curso-clinico', component: CursoClinicoComponent
      },
      {
        path: 'oncologia', component: OncologiaComponent
      },
      {
        path: 'hemodialisis', component: HemodialisisComponent
      },
      {
        path: 'nota-de-interconsulta', component: NotaInterconsultaComponent
      },
      {
        path: 'historia-clinica-torre-tc', component: HistoriaClinicaTorretcComponent
      },
      {
        path: 'nota-de-evolucion-de-uti-ucc', component: NotaEvolucionUtiUccComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodioActualRoutingModule {
}
