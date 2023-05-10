import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsComponent } from "projects/exp-clinico-gui/src/app/features/patients/components/patient-details/patient-details.component";
import { PatientsComponent } from 'projects/exp-clinico-gui/src/app/features/patients/components/patients/patients.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent
  },
  {
    path: ':idPatient',
    component: PatientDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {
}
