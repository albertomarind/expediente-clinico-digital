import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploracionFisicaComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/exploracion-fisica/exploracion-fisica.component";
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
