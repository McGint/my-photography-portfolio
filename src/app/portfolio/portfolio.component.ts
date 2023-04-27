import { Component } from '@angular/core';
// import { photographs, Photograph } from '../photographs';
import { HttpClient } from '@angular/common/http';
import { Observable, of, concat } from 'rxjs';
import { catchError, map, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  photoset: { photo: Array<any> };
  photoLocations: Array<string> = [];
  locationRetrieved: boolean = false;
  selectedLocation: string;


  constructor(private http: HttpClient) {
    this.photoset = null;
  
    const url = 'https://capable-sled-384714.de.r.appspot.com/photos';
  
    this.http.get(url).pipe(
      concatMap((data: any) => {
        console.log(data); // Check the structure of the data
        this.photoset = data.photoset;
  
        // Create an array of observables for each photo
        const observables = this.photoset.photo.map((photo: any) => {
          return this.getPhotoLocation(photo);
        });
  
        // Chain the observables one at a time
        return concat(...observables);
      })
    ).subscribe((location: string) => {
      this.photoLocations.push(location); // Store the location of each photo in an array
    });
  }
  

  getPhotoUrl(photo: any, photoset: any): string {
    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.png`;
  }

  getPhotoDescription(photo: any): string {
    if (photo.description._content) {
      return photo.description._content;
    } else {
      return 'No description available';
    }
  }

  getPhotoLocation(photo: any): Observable<string> {
    if (photo.location) {
      return of(photo.location); // Return cached location if it exists
    } else if (!this.locationRetrieved && photo.latitude) {
      let locationUrl = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=${photo.longitude}%2C${photo.latitude}`
      return this.http.get(locationUrl).pipe(
        map((data: any) => {
          console.log(data); // Check the structure of the data
          let photoLocation = 'No location available';
          if (data.address) {
            photoLocation = data.address.ShortLabel;
          }
          this.locationRetrieved = true;
          photo.location = photoLocation; // Cache the location in the photo object
          return photoLocation;
        }),
        catchError((error: any) => {
          console.error(error);
          return of('Error getting location');
        })
      );
    } else {
      return of('No location available');
    }
  }
  
  
}
