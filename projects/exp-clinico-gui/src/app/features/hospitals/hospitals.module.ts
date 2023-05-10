import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HospitalsRoutingModule } from './hospitals-routing.module';
import { HospitalsComponent } from 'projects/exp-clinico-gui/src/app/features/hospitals/components/hospitals.component';


@NgModule({
  declarations: [
    HospitalsComponent
  ],
  imports: [
    CommonModule,
    HospitalsRoutingModule,
    RouterModule
  ]
})
export class HospitalsModule { }
