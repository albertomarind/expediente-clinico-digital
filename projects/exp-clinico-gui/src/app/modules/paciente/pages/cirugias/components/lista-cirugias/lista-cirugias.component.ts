import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cirugias',
  templateUrl: './lista-cirugias.component.html',
  styleUrls: ['./lista-cirugias.component.scss']
})
export class ListaCirugiasComponent implements OnInit {

  cirugias: any[] = [
    {
      nombre:'Cirugía 1',
      medico:'Dr. Hector López Jimenez',
      fecha:'05/05/2023 17:00',
    },
    {
      nombre:'Cirugía 2',
      medico:'Dr. Hector López Jimenez',
      fecha:'03/06/2023 18:00',
    },
    {
      nombre:'Cirugía 3',
      medico:'Dr. Hector López Jimenez',
      fecha:'02/07/2023 19:00',
    },
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
