import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {

  items = [
    {label:'Hospital Ángeles Roma'},
    {label:'Pacientes'},
  ];

  idHospital!: string;
  patients: any[] = [
    {
      name:'Maximiliano Burgos Halton',
      birthdate:'27/07/1999',
      age:'18a',
      history:'100005986',
      room:'Hab 420',
      gender:'masc'
    },
    {
      name:'Elena López Gómez',
      birthdate:'28/09/2000',
      age:'18a',
      history:'100005996',
      room:'Hab 263',
      gender:'masc'
    },
    {
      name:'Luis Martínez Hernández',
      birthdate:'24/11/1985',
      age:'13a',
      history:'100005956',
      room:'Hab 325',
      gender:'masc'
    }
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.idHospital = this.route.snapshot.paramMap.get('idHospital')!;
    console.log(this.idHospital);
  }


}
