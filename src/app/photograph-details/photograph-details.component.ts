// import { Component, OnInit  } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Photograph, photographs } from '../photographs';

// @Component({
//   selector: 'app-photograph-details',
//   templateUrl: './photograph-details.component.html',
//   styleUrls: ['./photograph-details.component.css']
// })
// export class PhotographDetailsComponent implements OnInit {
//     photograph: Photograph | undefined;

//     constructor(private route: ActivatedRoute) { }

//     ngOnInit() {
//       // First get the product id from the current route.
//       const routeParams = this.route.snapshot.paramMap;
//       const photographIdFromRoute = Number(routeParams.get('photographId'));
    
//       // Find the product that correspond with the id provided in route.
//       this.photograph = photographs.find(photograph => photograph.id === photographIdFromRoute);
//     }

// }

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photograph-details',
  templateUrl: './photograph-details.component.html',
  styleUrls: ['./photograph-details.component.css']
})
export class PhotographDetailsComponent {
  // photoId: number;
  photo: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
      const routeParams = this.route.snapshot.paramMap;
      const photographIdFromRoute = Number(routeParams.get('photographId'));
      // this.photoId = params['id'];
      this.loadPhoto(photographIdFromRoute);
  }

  loadPhoto(photographIdFromRoute) {
    const apiKey = '3aa116fc864ad5c7c9bf52427e2b1547';
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${apiKey}&photo_id=${photographIdFromRoute}&format=json&nojsoncallback=1`;

    this.http.get(url).subscribe((data: any) => {
      console.log(data); // Check the structure of the data
      this.photo = data.photo;
    });
  }

  getPhotoUrl(photo: any): string {
    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.png`;
  }
}