import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BugService, IBug, BugStatusEnum } from '../../services/bug.service';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent implements OnInit {

  constructor(private bugService: BugService, private activateRoute: ActivatedRoute, private router: Router) { }

  private subscription: any;
  private bug: IBug;

  ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(params => {
      const id = +params['id'];
      this.bug = (id) ?
        this.bugService.getBugById(id) :
        {
          bugId: null,
          description: '111',
          statusId: BugStatusEnum.New,
          dateCreation: new Date()
        };
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSave(form: NgForm) {

    if(this.bug.bugId)
      this.bugService.updateBug(this.bug);
    else
      this.bugService.addBug(this.bug);

    this.router.navigate(['/']);
  }

}
