import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "primeng/api";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PanelModule } from "primeng/panel";
import { PickListModule } from "primeng/picklist";
import { RadioButtonModule } from "primeng/radiobutton";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";

import { CirugiasRoutingModule } from 'projects/exp-clinico-gui/src/app/modules/paciente/pages/cirugias/cirugias-routing.module';
import { CirugiasComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/pages/cirugias/cirugias.component';
import { CrearSolicitudCirugiaComponent } from './components/crear-solicitud-cirugia/crear-solicitud-cirugia.component';
import { ListaCirugiasComponent } from './components/lista-cirugias/lista-cirugias.component';


@NgModule({
  declarations: [
    CirugiasComponent,
    CrearSolicitudCirugiaComponent,
    ListaCirugiasComponent
  ],
  imports: [
    CommonModule,
    CirugiasRoutingModule,
    FormsModule,
    BreadcrumbModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    RippleModule,
    SharedModule,
    TableModule,
    CalendarModule,
    CheckboxModule,
    ChipModule,
    DropdownModule,
    InputTextareaModule,
    PickListModule,
    RadioButtonModule,
    DialogModule
  ]
})
export class CirugiasModule { }
