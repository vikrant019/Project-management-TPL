import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseSensitive'
})
export class CaseSensitivePipe implements PipeTransform {
  // transform(items: any[], searchText: any): any[] {
  //   console.log(searchText)
  //   if (!items) {
  //     return [];
  //   }
  //   if (!searchText) {
  //     return items;
  //   }

  //   return items.filter(a => a.appAcronym.includes);
  // }
  transform(items: any[], searchText: string='') {

    if (!items) return [];
    if (!searchText || searchText === '') return items;
    console.log(items.filter(name => name))
    return items.filter(item => {

        return item.ptheme.includes(searchText) ;
    });

}
}
