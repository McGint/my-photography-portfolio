import { Component, EventEmitter, Output } from '@angular/core';
import { photographs } from '../photographs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  photographs = photographs;
  @Output() locationClicked = new EventEmitter<string>();

  getCounties() {
    return [...new Set(this.photographs.map(photo => photo.county))];
  }
  
  getLocations(county: string): string[] {
    const locations = new Set<string>();
    this.photographs.forEach(photo => {
      if (photo.county === county) {
        locations.add(photo.location);
      }
    });
    return Array.from(locations);
}

  
  togglePanel(event) {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  onLocationClicked(location: string) {
    this.locationClicked.emit(location);
  }
}
