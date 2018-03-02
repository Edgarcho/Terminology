import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Term } from './term.model';

@Component({
  selector: 'term-list',
  template: `
  <select class="custom-select custom-select-lg col-md-3" (change)='onChange($event.target.value)'>
   <option value="allLanguage" selected="selected">ALL</option>
   <option value="HTML"> HTML</option>
   <option value="CSS"> CSS</option>
   <option value="Java"> Java</option>
   <option value="JavaScript"> JavaScript</option>
  </select>
  <div class ="card-columns">
    <div class="card" *ngFor = 'let currentTerm of childTermList | completeness:filterByLanguage'>
      <div class="card-body">
        <h5 class="card-title">{{currentTerm.term}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{currentTerm.language}}</h6>
        <p class="card-text">{{currentTerm.definition}}</p>
        <button (click)='editTermButton(currentTerm)'>Edit</button>
      </div>
    </div>
  </div>
  `
})

export class TermListComponent {
  @Input() childTermList: Term [];
  @Output() clickSender = new EventEmitter();
  filterByLanguage: string = "allLanguage";

  editTermButton(termToEdit: Term){
    this.clickSender.emit(termToEdit);
  }
  onChange(userFilter){
    this.filterByLanguage = userFilter;
  }
}
