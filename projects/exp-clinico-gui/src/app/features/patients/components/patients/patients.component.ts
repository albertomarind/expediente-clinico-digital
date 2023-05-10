import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  idHospital!: string;
  patients: any[] = [
    {
      name:'Maximiliano Burgos Halton',
      birthdate:'27/07/1999',
      dato1:'18a',
      history:'100005986',
      room:'Hab 420',
      data:'masc'
    },
    {
      name:'Elena López Gómez',
      birthdate:'28/09/2000',
      dato1:'18a',
      history:'100005996',
      room:'Hab 263',
      data:'masc'
    },
    {
      name:'Luis Martínez Hernández',
      birthdate:'24/11/1985',
      dato1:'13a',
      history:'100005956',
      room:'Hab 325',
      data:'masc'
    }
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.idHospital = this.route.snapshot.paramMap.get('idHospital')!;
    console.log(this.idHospital);
  }

}