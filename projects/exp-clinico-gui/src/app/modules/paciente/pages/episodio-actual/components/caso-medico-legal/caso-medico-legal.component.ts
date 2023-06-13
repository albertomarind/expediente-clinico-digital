import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caso-medico-legal',
  templateUrl: './caso-medico-legal.component.html',
  styleUrls: ['./caso-medico-legal.component.scss']
})
export class CasoMedicoLegalComponent implements OnInit {
  value: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
