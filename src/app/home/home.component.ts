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
    
    const url = 'https://capable-sled-384714.de.r.appspot.com/photos';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.photoset = data.photoset;
    });
  }

  getPhotoUrl(photo: any, photoset: any): string {
    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.png`;
  }
}
