import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PanelModule } from "primeng/panel";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from 'projects/exp-clinico-gui/src/app/features/patients/components/patients/patients.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';


@NgModule({
  declarations: [
    PatientsComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    TableModule,
    PanelModule,
    CardModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule
  ]
})
export class PatientsModule { }
