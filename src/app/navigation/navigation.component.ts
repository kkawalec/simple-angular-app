import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
})

export class NavigationComponent {

  /**
   * constructor
   * @param {Router} router
   */
  constructor(private router: Router) { }
}
