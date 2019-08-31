import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { BugsListComponent } from './bugs-list/bugs-list.component';
import { BugService } from '../services/bug.service';
import { BugStatusNamePipe } from '../pipes/bug-status-name.pipe';
import { BugEditComponent } from './bug-edit/bug-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BugsListComponent,
    BugStatusNamePipe,
    BugEditComponent
  ],
  entryComponents: [BugEditComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'bug-add', component: BugEditComponent },
      { path: 'bug-edit/:id', component: BugEditComponent }
    ]),
    NgbModule
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
