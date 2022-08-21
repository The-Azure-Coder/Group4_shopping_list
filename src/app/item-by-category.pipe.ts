import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemByCategory',
})
export class ItemByCategoryPipe implements PipeTransform {
  transform(
    value: any[],
    filterKey: string,
    filterValue: string,
    ...args: unknown[]
  ): any[] {
    return value.filter((item: any) => {
      return item[filterKey] == filterValue;
    });
  }
}
