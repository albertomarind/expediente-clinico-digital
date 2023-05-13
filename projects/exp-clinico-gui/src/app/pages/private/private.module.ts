import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDoctorHeaderModule } from "projects/exp-clinico-gui/src/app/shared/doctor/info-doctor-header/info-doctor-header.module";

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from 'projects/exp-clinico-gui/src/app/pages/private/components/private.component';


@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    InfoDoctorHeaderModule
  ]
})
export class PrivateModule { }
