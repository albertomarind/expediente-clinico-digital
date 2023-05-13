import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BadgeModule } from "primeng/badge";
import { InfoDoctorHeaderComponent } from "projects/exp-clinico-gui/src/app/shared/doctor/info-doctor-header/components/info-doctor-header/info-doctor-header.component";
import { SidebarPerfilDoctorModule } from "projects/exp-clinico-gui/src/app/shared/doctor/sidebar-perfil-doctor/sidebar-perfil-doctor.module";



@NgModule({
  declarations: [
    InfoDoctorHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarPerfilDoctorModule,
    BadgeModule
  ],
  exports:[
    InfoDoctorHeaderComponent
  ]
})
export class InfoDoctorHeaderModule { }
