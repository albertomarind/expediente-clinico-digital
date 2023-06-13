import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
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

@NgModule({
  declarations: [
    EpisodioActualComponent,
    NotaInterrogatorioComponent,
    NotaEvolutivoComponent,
    ExploracionFisicaComponent,
    CasoMedicoLegalComponent,
    HistoriaClinicaPediatricaComponent
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
    CalendarModule
  ]
})
export class EpisodioActualModule {
}
