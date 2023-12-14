import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  getStarted() {
   
    console.log('Get Started button clicked');

    // Navigate to the "Product" page
    this.router.navigate(['/product']);
  }
}
