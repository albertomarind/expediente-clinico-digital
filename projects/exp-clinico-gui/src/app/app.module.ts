import { NgOptimizedImage } from "@angular/common";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateHeaderComponent } from './components/private-header/private-header.component';
import { InfoDoctorHeaderComponent } from './components/info-doctor-header/info-doctor-header.component';
import { InfoPatientHeaderComponent } from './components/info-patient-header/info-patient-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivateHeaderComponent,
    InfoDoctorHeaderComponent,
    InfoPatientHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
