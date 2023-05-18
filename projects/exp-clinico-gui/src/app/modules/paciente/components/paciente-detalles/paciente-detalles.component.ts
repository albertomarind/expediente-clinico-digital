import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes-details',
  templateUrl: './paciente-detalles.component.html',
  styleUrls: ['./paciente-detalles.component.scss']
})
export class PacienteDetallesComponent implements OnInit {

  items = [
    {label:'Hospital Ángeles Roma'},
    {label:'Pacientes'},
    {label:'Detalles'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
