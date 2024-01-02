import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  photoset: { photo: Array<any> };

  constructor(private http: HttpClient) {
    this.photoset = null;
    
    const apiKey = 'fc955765a12de40059f5cda9f0d5649f';
    const userId = '94142351@N06'; // Replace with your Flickr user ID

    const url = `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`;


    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.photoset = data.photos;
    });
  }

  getPhotoUrl(photo: any, photoset: any): string {
    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.png`;
  }
}
