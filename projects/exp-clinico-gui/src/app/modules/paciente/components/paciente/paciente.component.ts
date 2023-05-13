import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pacientes',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    let idHospital = this.route.snapshot.paramMap.get('idHospital')!;
    console.log(idHospital);
    let idPatient = this.route.snapshot.paramMap.get('idPatient')!;
    console.log(idPatient);
  }


}
