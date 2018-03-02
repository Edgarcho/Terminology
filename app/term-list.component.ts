import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Term } from './term.model';

@Component({
  selector: 'term-list',
  template: `
  <div class ="card-columns">
    <div class="card" *ngFor = 'let currentTerm of childTermList'>
      <div class="card-body">
        <h5 class="card-title">{{currentTerm.term}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{currentTerm.language}}</h6>
        <p class="card-text">{{currentTerm.definition}}</p>
        <button (click)='editTermButton(currentTerm)'>Edit</button>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
  `
})

export class TermListComponent {
  @Input() childTermList: Term [];
  @Output() clickSender = new EventEmitter();

  editTermButton(termToEdit: Term){
    this.clickSender.emit(termToEdit);
  }

}
