import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  isEducationExpanded: boolean = false;
  isWorkExperienceExpanded: boolean = false;
  isExtraCurricularActivitiesExpanded: boolean = false;

  toggleEducation() {
    this.isEducationExpanded = !this.isEducationExpanded;
  }

  toggleWorkExperience() {
    this.isWorkExperienceExpanded = !this.isWorkExperienceExpanded;
  }

  toggleExtraCurricularActivities() {
    this.isExtraCurricularActivitiesExpanded = !this.isExtraCurricularActivitiesExpanded;
  }
}
