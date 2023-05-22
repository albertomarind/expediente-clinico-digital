import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent implements OnInit {
  value: string = 'prioridad';
  value2:string = 'hospitalizacion';
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
  constructor() { }

  ngOnInit(): void {
  }

}
