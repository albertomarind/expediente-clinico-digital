import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BreadcrumbModule } from "primeng/breadcrumb";

import { HospitalesRoutingModule } from 'projects/exp-clinico-gui/src/app/modules/hospitales/hospitales-routing.module';
import { HospitalesComponent } from 'projects/exp-clinico-gui/src/app/modules/hospitales/components/hospitales.component';


@NgModule({
  declarations: [
    HospitalesComponent
  ],
    imports: [
        CommonModule,
        HospitalesRoutingModule,
        RouterModule,
        BreadcrumbModule
    ]
})
export class HospitalesModule { }
