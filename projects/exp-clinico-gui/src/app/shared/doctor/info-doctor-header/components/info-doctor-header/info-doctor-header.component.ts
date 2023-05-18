import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-info-doctor-header',
  templateUrl: './info-doctor-header.component.html',
  styleUrls: ['./info-doctor-header.component.scss']
})
export class InfoDoctorHeaderComponent implements OnInit {

  display: boolean = false;

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  closeSession(){
    this.router.navigate(['/']);
  }

}
