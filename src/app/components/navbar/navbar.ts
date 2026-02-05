import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,  
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  closeNavbar() {
    if (this.navbarCollapse) {
      const collapse = Collapse.getOrCreateInstance(this.navbarCollapse.nativeElement);
      collapse.hide();
    }
  }
}
