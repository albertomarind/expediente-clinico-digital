import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDoctorHeaderModule } from "projects/exp-clinico-gui/src/app/shared/doctor/info-doctor-header/info-doctor-header.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InfoDoctorHeaderModule
  ],
  exports:[
    InfoDoctorHeaderModule
  ]
})
export class DoctorModule { }
