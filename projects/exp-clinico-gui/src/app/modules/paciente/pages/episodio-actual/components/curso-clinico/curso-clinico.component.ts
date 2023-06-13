import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-clinico',
  templateUrl: './curso-clinico.component.html',
  styleUrls: ['./curso-clinico.component.scss']
})
export class CursoClinicoComponent implements OnInit {

  sourceItems:any[] = [
    {
      nombre: '06/06/2023 12:47 - Dra Maria Fernanda Gonzalez Alvarez',
    },
    {
      nombre: '06/06/2023 16:51 - Dra Maria Fernanda Gonzalez Alvarez',
    },
    {
      nombre: '06/06/2023 13:26 - Dra Maria Fernanda Gonzalez Alvarez',
    }
  ];

  targetItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
