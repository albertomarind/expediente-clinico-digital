import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-medicacion',
  templateUrl: './nueva-medicacion.component.html',
  styleUrls: ['./nueva-medicacion.component.scss']
})
export class NuevaMedicacionComponent implements OnInit {

  sourceItems: any[] = [
    {
      nombre: "CEFAXONA SOL INY FCO AMP 1G IM",
      codigo: 'ALG-00112762',
      uidExterno: 'ALG-00112762'
    },
    {
      nombre: "CEFURACET TAB 500MG",
      codigo: 'ALG-00112762',
      uidExterno: 'ALG-00112762'
    },
    {
      nombre: "PARACETAMOL SOL 100MG/ML FCO GTS 20ML",
      codigo: 'ALG-00112762',
      uidExterno: 'ALG-00112762'
    }
  ];

  targetItems: any[] = [];

  showDialog: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
