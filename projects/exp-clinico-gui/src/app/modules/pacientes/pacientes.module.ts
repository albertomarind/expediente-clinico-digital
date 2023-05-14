import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PanelModule } from "primeng/panel";
import { RippleModule } from "primeng/ripple";
import { SidebarModule } from "primeng/sidebar";
import { TableModule } from "primeng/table";
import { CrearPacienteComponent } from "projects/exp-clinico-gui/src/app/modules/pacientes/components/crear-paciente/crear-paciente.component";
import { PacientesRoutingModule } from 'projects/exp-clinico-gui/src/app/modules/pacientes/pacientes-routing.module';
import { PacientesComponent } from 'projects/exp-clinico-gui/src/app/modules/pacientes/components/pacientes/pacientes.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';

@NgModule({
  declarations: [
    PacientesComponent,
    CrearPacienteComponent,
    ListaPacientesComponent
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
    BreadcrumbModule,
    CalendarModule,
    DropdownModule
  ]
})
export class PacientesModule { }
