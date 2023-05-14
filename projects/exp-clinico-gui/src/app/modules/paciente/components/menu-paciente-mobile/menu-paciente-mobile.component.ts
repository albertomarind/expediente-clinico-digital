import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-menu-paciente-mobile',
  templateUrl: './menu-paciente-mobile.component.html',
  styleUrls: ['./menu-paciente-mobile.component.scss']
})
export class MenuPacienteMobileComponent implements OnInit {
  display: boolean = false;
  items!: MenuItem[];

  constructor() {
  }


  ngOnInit() {
    this.items = [
      {
        label: 'Resumen',
      },
      {
        label: 'Notas de evaluación',
      },
      {
        label: 'Historia Clínica'
      },
      {
        label: 'Laboratorio'
      },
      {
        label: 'Imageneología'
      },
      {
        label: 'Nueva receta'
      },
      {
        label: 'Programar cirugía'
      }
    ];
  }

}
