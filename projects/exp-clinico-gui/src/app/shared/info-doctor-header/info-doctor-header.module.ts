import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BadgeModule } from "primeng/badge";
import { InfoDoctorHeaderComponent } from "projects/exp-clinico-gui/src/app/shared/info-doctor-header/components/info-doctor-header/info-doctor-header.component";
import { SidebarProfileDoctorModule } from "projects/exp-clinico-gui/src/app/shared/sidebar-profile-doctor/sidebar-profile-doctor.module";



@NgModule({
  declarations: [
    InfoDoctorHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarProfileDoctorModule,
    BadgeModule
  ],
  exports:[
    InfoDoctorHeaderComponent
  ]
})
export class InfoDoctorHeaderModule { }
