import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";

import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { SidebarProfileDoctorComponent } from './components/sidebar-profile-doctor/sidebar-profile-doctor.component';


@NgModule({
  declarations: [
    SidebarProfileDoctorComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    AvatarModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    SidebarProfileDoctorComponent
  ]
})
export class SidebarProfileDoctorModule {
}
