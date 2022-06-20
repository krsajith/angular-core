import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parentFilter'
})
export class ParentFilterPipe implements PipeTransform {

  transform(list : any[] | null, ...args: any[]): any[] {
    console.log(list, args);
    return list || [];
  }

}
