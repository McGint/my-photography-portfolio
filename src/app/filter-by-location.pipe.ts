import { Pipe, PipeTransform } from '@angular/core';
import { Photograph } from './photographs';

@Pipe({
  name: 'filterByLocation'
})
export class FilterByLocationPipe implements PipeTransform {
  transform(photographs: Photograph[], location: string): Photograph[] {
    if (!location || location === 'All') {
      return photographs;
    }

    return photographs.filter(photo => photo.location === location);
  }
}
