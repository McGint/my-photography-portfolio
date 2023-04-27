import { Pipe, PipeTransform } from '@angular/core';
import { Photograph } from './photographs';

@Pipe({
  name: 'filterByCounty'
})
export class FilterByCountyPipe implements PipeTransform {
  transform(photographs: Photograph[], county: string): Photograph[] {
    if (!county || county === 'All') {
      return photographs;
    }
    return photographs.filter(photo => photo.county === county);
  }
}
