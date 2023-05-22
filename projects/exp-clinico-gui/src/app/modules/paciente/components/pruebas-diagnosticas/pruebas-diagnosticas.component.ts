import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pruebas-diagnosticas',
  templateUrl: './pruebas-diagnosticas.component.html',
  styleUrls: ['./pruebas-diagnosticas.component.scss']
})
export class PruebasDiagnosticasComponent implements OnInit {

  pruebas: any[] = [
    {
      fechaPeticion: '17/05/23',
      prueba: 'AC.ANTl-AME3A AC ANTI-ADENOVIRUS EN LCR',
      comentario: '',
      verPeticion: true,
      solicitante: 'Dr. Juan Escamilla W',
      fechaResultado: '',
      resultado: '',
    },
    {
      fechaPeticion: '23/08/23',
      prueba: 'COLUMNA CERVICAL 4 PROYECCIONES',
      comentario: '',
      verPeticion: false,
      solicitante: 'Dr. Juan Escamilla W',
      fechaResultado: '',
      resultado: '',
    },
    {
      fechaPeticion: '24/05/23',
      prueba: 'ACIDO FOLICO',
      comentario: '',
      verPeticion: false,
      solicitante: 'Dr. Juan Escamilla W',
      fechaResultado: '',
      resultado: '',
    }
  ];

  items = [
    {
      label: 'Modificar',
    },
    {
      label: 'Imprimir solicitud',
      command: (event: any) => {
        //event.originalEvent: Browser event
        //event.item: menuitem metadata
        // const link = this.renderer.createElement('a');
        // this.renderer.setAttribute(link, 'href', 'assets/solicitud.pdf');
        // this.renderer.setAttribute(link, 'download', 'solicitud.pdf');
        // link.click();
      }
    }
  ]

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

}
