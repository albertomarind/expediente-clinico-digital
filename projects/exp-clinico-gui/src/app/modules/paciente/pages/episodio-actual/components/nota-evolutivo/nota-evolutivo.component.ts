import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota-evolutivo',
  templateUrl: './nota-evolutivo.component.html',
  styleUrls: ['./nota-evolutivo.component.scss']
})
export class NotaEvolutivoComponent implements OnInit {

  texto: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
