import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalsComponent } from 'projects/exp-clinico-gui/src/app/features/hospitals/components/hospitals.component';

const routes: Routes = [
  {
    path: '',
    component: HospitalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule {
}
