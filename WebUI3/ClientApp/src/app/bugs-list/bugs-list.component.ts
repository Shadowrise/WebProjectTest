import { Component, OnInit } from '@angular/core';
import { BugService, IBug } from '../../services/bug.service';

@Component({
  selector: 'bugs-list',
  templateUrl: './bugs-list.component.html',
  styleUrls: ['./bugs-list.component.css']
})
export class BugsListComponent implements OnInit {

  bugs: IBug[] = [];
  constructor(private bugService: BugService) { }

  ngOnInit() {
    this.bugService.getBugs().subscribe(bugs => this.bugs = bugs);
  }

  public currentBugId;
  public selectBug(event: any, bug: IBug) {
    this.currentBugId = bug.bugId;
  }

}
