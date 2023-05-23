import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-solicitud-cirugias',
  templateUrl: './crear-solicitud-cirugia.component.html',
  styleUrls: ['./crear-solicitud-cirugia.component.scss']
})
export class CrearSolicitudCirugiaComponent implements OnInit {

  value: string = 'prioridad';
  value2: string = 'hospitalizacion';
  value3: string = 'no';
  seleccionMovilidad: any;
  selectedEspecialidad: any;
  especialidades = [
    {name: 'U.M.Anestesiología Ped', code: '1'},
    {name: 'U.M.Anestesiología Quirófano', code: '2'},
    {name: 'U.M.Angio y Cir Vascular Ped Qx', code: '3'}
  ];
  sourceItems: any[] = [
    {
      nombre: "ACANTI.ADENOVIRUS"
    },
    {
      nombre: "ACANTI.AMEBA"
    },
    {
      nombre: "ACANTI-COXSACKIE VIRUS A"
    }
  ];

  targetItems: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
