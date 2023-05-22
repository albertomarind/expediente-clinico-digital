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
        routerLink: ["resumen"],
        command: () => {
          this.display = false;
        }
      },
      {
        label: 'Notas de evolución',
        routerLink: ["nota-evolucion"],
        command: () => {
          this.display = false;
        }
      },
      {
        label: 'Medicación',
        routerLink: ["medicacion"],
        command: () => {
          this.display = false;
        }
      },
      {
        label: 'Pruebas diagnósticas',
        routerLink: ["pruebas-diagnosticas"],
        command: () => {
          this.display = false;
        }
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
