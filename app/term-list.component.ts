import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Term } from './term.model';

@Component({
  selector: 'term-list',
  template: `
  <div (change)='onChange($event.target.value)'>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="allLanguage">
      <label class="form-check-label" for="inlineCheckbox1">All</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="HTML">
      <label class="form-check-label" for="inlineCheckbox2">HTML</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="CSS">
      <label class="form-check-label" for="inlineCheckbox3">CSS</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Java">
      <label class="form-check-label" for="inlineCheckbox4">Java</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="JavaScript">
      <label class="form-check-label" for="inlineCheckbox5">JavaScript</label>
    </div>
  </div>


  <div class ="card-columns">
    <div class="card" *ngFor = 'let currentTerm of childTermList' | completeness:'filterByLanguage'>
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
  filterByLanguage: string = "allLanguage";

  editTermButton(termToEdit: Term){
    this.clickSender.emit(termToEdit);
  }
  onChange(userFilter){
    this.filterByLanguage = userFilter;
  }
}
