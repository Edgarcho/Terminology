import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Term } from './term.model';

@Component({
  selector: 'term-list',
  template: `
  <ul *ngFor = 'let currentTerm of childTermList'>
  <li>{{currentTerm.term}}</li>
  <li>{{currentTerm.definition}}</li>
  <li>{{currentTerm.language}}</li>
  </ul>
  `
})

export class TermListComponent {
  @Input() childTermList: Term [];
  @Output() clickSender = new EventEmitter();


}
