import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSolicitudCirugiaComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/cirugias/components/crear-solicitud-cirugia/crear-solicitud-cirugia.component";
import { ListaCirugiasComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/pages/cirugias/components/lista-cirugias/lista-cirugias.component";
import { CirugiasComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/pages/cirugias/cirugias.component';

const routes: Routes = [
  {
    path: '',
    component: CirugiasComponent,
    children: [
      {
        path: '', component: ListaCirugiasComponent
      },
      {
        path: 'crear-solicitud-cirugia', component: CrearSolicitudCirugiaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CirugiasRoutingModule {
}
