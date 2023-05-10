import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar-profile-doctor',
  templateUrl: './sidebar-profile-doctor.component.html',
  styleUrls: ['./sidebar-profile-doctor.component.scss']
})
export class SidebarProfileDoctorComponent implements OnInit {
  display: boolean = false;

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  closeSession(){
    this.router.navigate(['/']);
  }
}
