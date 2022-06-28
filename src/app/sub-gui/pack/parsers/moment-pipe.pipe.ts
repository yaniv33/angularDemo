import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'momentPipe'
})
export class MomentPipePipe implements PipeTransform {

  transform(value: string, pattern: string, local?: string): any {

    if (!local) {
      let  val: moment.Moment = value ?  moment(value) : moment();
      return val.format('LLLL');
    }
    return moment(value, pattern, local).format(pattern);
  }

}
