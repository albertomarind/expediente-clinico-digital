import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasoMedicoLegalComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/caso-medico-legal/caso-medico-legal.component";
import { ExploracionFisicaComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/exploracion-fisica/exploracion-fisica.component";
import { HistoriaClinicaPediatricaComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/historia-clinica-pediatrica/historia-clinica-pediatrica.component";
import { ListaNotasComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/lista-notas/lista-notas.component";
import { NotaEvolutivoComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/nota-evolutivo/nota-evolutivo.component";
import { NotaInterrogatorioComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/nota-interrogatorio/nota-interrogatorio.component";
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
