import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDomain'
})
export class ShortDomainPipe implements PipeTransform {

  transform(url: string, args?: any): any {
    if (url) {
      if (url.length > 3) {
        let result;
        result = url.substring(url.lastIndexOf('/') + 1);
        return result;
      }
      return url;
    }
    return url;
  }

}
