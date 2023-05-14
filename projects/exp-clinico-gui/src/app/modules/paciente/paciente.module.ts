import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from "primeng/avatar";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { RippleModule } from "primeng/ripple";
import { SidebarModule } from "primeng/sidebar";
import { InfoPacienteHeaderComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/info-paciente-header/info-paciente-header.component";
import { MenuPacienteComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/menu-paciente/menu-paciente.component";
import { PacienteDetallesComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/paciente-detalles/paciente-detalles.component";
import { PacienteRoutingModule } from 'projects/exp-clinico-gui/src/app/modules/paciente/paciente-routing.module';
import { PacienteComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/components/paciente/paciente.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { FactoresRiesgoComponent } from './components/factores-riesgo/factores-riesgo.component';
import { NotaEvaluacionComponent } from './components/nota-evaluacion/nota-evaluacion.component';
import { MenuPacienteMobileComponent } from './components/menu-paciente-mobile/menu-paciente-mobile.component';


@NgModule({
  declarations: [
    PacienteComponent,
    InfoPacienteHeaderComponent,
    MenuPacienteComponent,
    ResumenComponent,
    FactoresRiesgoComponent,
    NotaEvaluacionComponent,
    PacienteDetallesComponent,
    MenuPacienteMobileComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PacienteRoutingModule,
    RippleModule,
    InputTextModule,
    PanelModule,
    BreadcrumbModule,
    SidebarModule,
    AvatarModule,
    PanelMenuModule
  ]
})
export class PacienteModule {
}
