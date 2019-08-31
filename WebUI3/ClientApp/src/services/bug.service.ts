export interface IBug {
  bugId: number;
  description: string;
  typeId?: number;
  statusId?: number;
  areaId?: number;
  userId?: number;
  dateCreation: Date;
};

const BUGS: IBug[] = [
  {
    bugId: 1,
    description: 'bug 1',
    typeId: 1,
    statusId: 1,
    areaId: 1,
    userId: 1,
    dateCreation: new Date()
  }
];

export interface IBugStatus {
  statusId: number;
  name: string;
}

export enum BugStatusEnum {
  New = 1,
  Processing = 2,
  Resolved = 3,
  Rejected = 4
}

const BUG_STATUSES: IBugStatus[] = [
  {
    statusId: BugStatusEnum.New,
    name: 'New'
  },
  {
    statusId: BugStatusEnum.Processing,
    name: 'Processing'
  },
  {
    statusId: BugStatusEnum.Resolved,
    name: 'Resolved'
  },
  {
    statusId: BugStatusEnum.Rejected,
    name: 'Rejected'
  }
];

import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 

@Injectable()
export class BugService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
   
  }

  getBugs(): Observable<IBug[]> {
    return this.http.get<IBug[]>(this.baseUrl + 'api/Bugs/GetBugs');
  }

  getBugById(id: number) {
    return BUGS.find((b) => b.bugId === id);
  }

  getBugStatuses(): IBugStatus[] {
    return BUG_STATUSES;
  }

  addBug(bug: IBug) {
    bug.bugId = 2;
    BUGS.push(bug);
  }

  updateBug(bug: IBug) {
    
  }
}
