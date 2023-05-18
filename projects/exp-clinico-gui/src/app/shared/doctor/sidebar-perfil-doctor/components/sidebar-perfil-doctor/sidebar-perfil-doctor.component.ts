import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar-perfil-doctor',
  templateUrl: './sidebar-perfil-doctor.component.html',
  styleUrls: ['./sidebar-perfil-doctor.component.scss']
})
export class SidebarPerfilDoctorComponent implements OnInit {
  display: boolean = false;

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  closeSession(){
    this.router.navigate(['/']);
  }
}
