import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AvatarModule } from "primeng/avatar";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { RadioButtonModule } from "primeng/radiobutton";
import { RippleModule } from "primeng/ripple";
import { SidebarModule } from "primeng/sidebar";
import { TableModule } from "primeng/table";
import { InfoPacienteHeaderComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/info-paciente-header/info-paciente-header.component";
import { MenuPacienteComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/menu-paciente/menu-paciente.component";
import { PacienteDetallesComponent } from "projects/exp-clinico-gui/src/app/modules/paciente/components/paciente-detalles/paciente-detalles.component";
import { PacienteRoutingModule } from 'projects/exp-clinico-gui/src/app/modules/paciente/paciente-routing.module';
import { PacienteComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/components/paciente/paciente.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { FactoresRiesgoComponent } from './components/factores-riesgo/factores-riesgo.component';
import { NotaEvolucionComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/components/nota-evolucion/nota-evolucion.component';
import { MenuPacienteMobileComponent } from './components/menu-paciente-mobile/menu-paciente-mobile.component';
import { MedicacionComponent } from './components/medicacion/medicacion.component';
import { AccordionModule } from 'primeng/accordion';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { NuevaMedicacionComponent } from './components/nueva-medicacion/nueva-medicacion.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PickListModule } from 'primeng/picklist';
import { PruebasDiagnosticasComponent } from './components/pruebas-diagnosticas/pruebas-diagnosticas.component';
import { LaboratorioComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/components/laboratorio/laboratorio.component';
import { ImagenComponent } from './components/imagen/imagen.component';

@NgModule({
  declarations: [
    PacienteComponent,
    InfoPacienteHeaderComponent,
    MenuPacienteComponent,
    ResumenComponent,
    FactoresRiesgoComponent,
    NotaEvolucionComponent,
    PacienteDetallesComponent,
    MenuPacienteMobileComponent,
    MedicacionComponent,
    NuevaMedicacionComponent,
    PruebasDiagnosticasComponent,
    LaboratorioComponent,
    ImagenComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PacienteRoutingModule,
    FormsModule,
    RippleModule,
    InputTextModule,
    PanelModule,
    BreadcrumbModule,
    SidebarModule,
    AvatarModule,
    PanelMenuModule,
    AccordionModule,
    TableModule,
    TieredMenuModule,
    InputTextareaModule,
    DialogModule,
    PickListModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    ChipModule
  ]
})
export class PacienteModule {
}
