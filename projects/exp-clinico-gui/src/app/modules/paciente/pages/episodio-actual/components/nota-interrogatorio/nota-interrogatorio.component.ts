import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota-interrogatorio',
  templateUrl: './nota-interrogatorio.component.html',
  styleUrls: ['./nota-interrogatorio.component.scss']
})
export class NotaInterrogatorioComponent implements OnInit {

  texto: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
