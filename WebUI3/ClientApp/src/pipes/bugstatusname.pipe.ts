import { Pipe, PipeTransform } from '@angular/core';
import { BugService, IBugStatus } from '../services/bug.service';

@Pipe({
  name: 'bugstatusname'
})
export class BugStatusNamePipe implements PipeTransform {
  constructor(private bugService: BugService) {

  }
  transform(value: number, args?: any): string {
    const status: IBugStatus = this.bugService.getBugStatuses().find(x => x.statusId === value);
    return (status) ? status.name : "";
  }
}
