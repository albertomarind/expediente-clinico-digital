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
  value4: string = '1';
  seleccionMovilidad: any;
  selectedEspecialidad: any;
  especialidades = [
    {name: 'U.M.Anestesiología Ped', code: '1'},
    {name: 'U.M.Anestesiología Quirófano', code: '2'},
    {name: 'U.M.Angio y Cir Vascular Ped Qx', code: '3'}
  ];
  elementoSeleccionado: any;
  elementos = [
    {name: 'Dato 1', code: '1'},
    {name: 'Dato 2', code: '2'},
    {name: 'Dato 3', code: '3'}
  ];

  quirofanoSeleccionado: any;

  quirofanos = [
    {name: 'Sala de procedimientos Urgencias', code: '1'},
    {name: 'Sala de procedimientos Urgencias 2', code: '2'},
    {name: 'Sala de procedimientos Urgencias 3', code: '3'}
  ];

  tipoAdmisionSeleccionada: any;
  tiposAdmision = [
    {name: 'Cirugía ambulatoria', code: '1'},
    {name: 'Hospitalización', code: '2'},
    {name: 'Urgencias', code: '3'}
  ];
  sourceItems: any[] = [
    {
      descripcion: "PUNCIÓN VENOSA Y ARTERIAL",
      codigo: 'CIRMEIN001'
    },
    {
      descripcion: "ANGIOPLASTIA Y APLICACIONES DE STENTS EN TERRITORIOS VENOSOS COMO SECUELA DE POST FLEBITICA.",
      codigo: 'CIRANVAS007'
    },
    {
      descripcion: "RESECCIÓN PULMONAR LOBAR",
      codigo: 'CIRTORX014'
    }
  ];

  targetItems: any[] = [];
  mostrarModalCirujano: boolean = false;
  mostrarModalDoctor: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  agregarFavorito(event: any) {
    console.log(event);
    event.stopPropagation();
  }

  onSelect(event: any) {
    console.log(event)
  }
}
