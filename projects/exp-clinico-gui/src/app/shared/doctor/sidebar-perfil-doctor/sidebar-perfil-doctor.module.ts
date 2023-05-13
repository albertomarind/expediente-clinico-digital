import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";

import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { SidebarPerfilDoctorComponent } from 'projects/exp-clinico-gui/src/app/shared/doctor/sidebar-perfil-doctor/components/sidebar-perfil-doctor/sidebar-perfil-doctor.component';


@NgModule({
  declarations: [
    SidebarPerfilDoctorComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    AvatarModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    SidebarPerfilDoctorComponent
  ]
})
export class SidebarPerfilDoctorModule {
}
