import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private router: Router) {}

  onSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const route = selectElement.value;
  
    if (route) {
      this.router.navigate([route]);
    }
  }
}
