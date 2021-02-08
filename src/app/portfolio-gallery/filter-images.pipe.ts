import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterImages'
})
export class FilterImagesPipe implements PipeTransform {

  transform(items: any[], portfolio: string): any {
    if(portfolio === 'all'){
      return items;
    }else {
      return items.filter(item =>{
        return item.category === portfolio;
      });
    }
  }

}
