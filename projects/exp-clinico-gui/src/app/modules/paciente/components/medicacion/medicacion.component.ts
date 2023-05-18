import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicacion',
  templateUrl: './medicacion.component.html',
  styleUrls: ['./medicacion.component.scss']
})
export class MedicacionComponent implements OnInit {

  medicamentos: any[] = [
    {
      nombre: 'CEFAXONA SOL INY FCO AMP 1G IM',
      via: 'IM',
      frecuencia: 'Cada 6 horas',
      duracion: '6 días',
      alergias: 'acebutolol (DESDE 2009); aciclovir y sus derivados (desde la infancia)',
      horarios: '05:00, 11:00, 17:00, 23:00',
      estatus: 'Paciente rechaza'
    },
    {
      nombre: 'PARACETAMOL SOL 100MG/ML FCO GTS 20ML',
      via: 'OR',
      frecuencia: 'Cada 12 horas',
      duracion: '2 días',
      alergias: 'acebutolol (DESDE 2009); aciclovir y sus derivados (desde la infancia)',
      horarios: '05:00, 11:00, 17:00, 23:00',
      estatus: 'Medicación suspendida'
    }
  ];

  items = [
    {
      label: 'Administrado',
    },
    {
      label: 'Administrado con inciente',
    },
    {
      label: 'Administrado cuando',
    },
    {
      label: 'No administrado',
    },
    {
      label: 'Modificar hora',
    },
    {
      label: 'Eliminar hora',
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
