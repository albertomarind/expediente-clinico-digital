import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.scss']
})
export class CrearPacienteComponent implements OnInit {

  items = [
    {label:'Hospital Ángeles Roma'},
    {label:'Pacientes'},
    {label:'Crear paciente'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
