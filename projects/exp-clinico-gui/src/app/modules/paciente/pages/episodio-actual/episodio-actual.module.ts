import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { SidebarModule } from "primeng/sidebar";

import { EpisodioActualRoutingModule } from './episodio-actual-routing.module';
import { EpisodioActualComponent } from './episodio-actual.component';
import { NotaInterrogatorioComponent } from './components/nota-interrogatorio/nota-interrogatorio.component';
import { NotaEvolutivoComponent } from './components/nota-evolutivo/nota-evolutivo.component';
import { EditorModule } from 'primeng/editor';
import { ExploracionFisicaComponent } from './components/exploracion-fisica/exploracion-fisica.component';

@NgModule({
  declarations: [
    EpisodioActualComponent,
    NotaInterrogatorioComponent,
    NotaEvolutivoComponent,
    ExploracionFisicaComponent
  ],
  imports: [
    CommonModule,
    EpisodioActualRoutingModule,
    FormsModule,
    PanelMenuModule,
    SidebarModule,
    EditorModule,
    PanelModule,
    ButtonModule
  ]
})
export class EpisodioActualModule {
}
