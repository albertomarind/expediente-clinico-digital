import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.scss']
})
export class LaboratorioComponent implements OnInit {
  value: string = 'prioridad';
  seleccionMovilidad:any;
  selectedDoctor:any;
  doctors = [
    {name: 'Dr. Adam Lewis', code: '1'},
    {name: 'Dr. Taylor Cobb', code: '2'},
    {name: 'Dr. Chelsea Whitaker', code: '3'},
    {name: 'Dr. Stephen Burnett', code: '4'},
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
