import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PanelModule } from "primeng/panel";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { PacientesRoutingModule } from 'projects/exp-clinico-gui/src/app/modules/pacientes/pacientes-routing.module';
import { PacientesComponent } from 'projects/exp-clinico-gui/src/app/modules/pacientes/components/pacientes/pacientes.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    PacientesComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    TableModule,
    PanelModule,
    CardModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    BreadcrumbModule
  ]
})
export class PacientesModule { }
