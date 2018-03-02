import { Component } from '@angular/core';
import { Term } from './term.model';

@Component({
  selector: 'app-root',
  template: `
    <new-term (newTermSender) = "addTerm($event)"></new-term>
    <term-list [childTermList]="masterTermList"></term-list>
  `
})

export class AppComponent {
  masterTermList: Term[] =[];

  addTerm(newTermFromChild: Term){
    this.masterTermList.push(newTermFromChild);
  }

}
