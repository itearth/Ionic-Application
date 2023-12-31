import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  getStarted() {
    // Navigate to the "Product" page
    this.router.navigate(['/product']);
  }

  post() {
    // Navigate to the "Posts" page
    this.router.navigate(['/posts']);
  }

  comment() {
    // Navigate to the "Comments" page
    this.router.navigate(['/comments']);
  }

}
