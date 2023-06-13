import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { PickListModule } from "primeng/picklist";
import { RadioButtonModule } from "primeng/radiobutton";
import { SidebarModule } from "primeng/sidebar";

import { EpisodioActualRoutingModule } from './episodio-actual-routing.module';
import { EpisodioActualComponent } from './episodio-actual.component';
import { NotaInterrogatorioComponent } from './components/nota-interrogatorio/nota-interrogatorio.component';
import { NotaEvolutivoComponent } from './components/nota-evolutivo/nota-evolutivo.component';
import { EditorModule } from 'primeng/editor';
import { ExploracionFisicaComponent } from './components/exploracion-fisica/exploracion-fisica.component';
import { CasoMedicoLegalComponent } from './components/caso-medico-legal/caso-medico-legal.component';
import { HistoriaClinicaPediatricaComponent } from './components/historia-clinica-pediatrica/historia-clinica-pediatrica.component';
import { CursoClinicoComponent } from './components/curso-clinico/curso-clinico.component';
import { OncologiaComponent } from './components/oncologia/oncologia.component';
import { HemodialisisComponent } from './components/hemodialisis/hemodialisis.component';
import { NotaInterconsultaComponent } from './components/nota-interconsulta/nota-interconsulta.component';
import { HistoriaClinicaTorretcComponent } from './components/historia-clinica-torretc/historia-clinica-torretc.component';
import { NotaEvolucionUtiUccComponent } from './components/nota-evolucion-uti-ucc/nota-evolucion-uti-ucc.component';

@NgModule({
  declarations: [
    EpisodioActualComponent,
    NotaInterrogatorioComponent,
    NotaEvolutivoComponent,
    ExploracionFisicaComponent,
    CasoMedicoLegalComponent,
    HistoriaClinicaPediatricaComponent,
    CursoClinicoComponent,
    OncologiaComponent,
    HemodialisisComponent,
    NotaInterconsultaComponent,
    HistoriaClinicaTorretcComponent,
    NotaEvolucionUtiUccComponent
  ],
  imports: [
    CommonModule,
    EpisodioActualRoutingModule,
    FormsModule,
    PanelMenuModule,
    SidebarModule,
    EditorModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    PickListModule,
    AccordionModule
  ]
})
export class EpisodioActualModule {
}
