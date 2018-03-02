import { Component, Output, EventEmitter } from '@angular/core';
import { Term } from './term.model';

@Component({
  selector: 'new-term',
  template: `
  <h3>Create new flashcard</h3>
  <p>Enter term, definition and select which catergory to storage the term.<p>
  <form id="newTermForm">
    <div class="form-group">
      <div class="col-md-4">
        <input class="form-control" placeholder="Term" #newTerm>
      </div>
      <div class="col-md-4">
        <input class="form-control" placeholder="Definition" #newDefinition>
      </div>
    </div>
    <div class="col-sm-4">
     <select #newLanguage class="custom-select custom-select-lg mb-3">
      <option value="HTML"> HTML</option>
      <option value="CSS"> CSS</option>
      <option value="Java"> Java</option>
      <option value="JavaScript"> JavaScript</option>
     </select>
    </div>
    <button class="btn btn-outline-primary" (click)="submitForm(newTerm.value, newDefinition.value, newLanguage.value); newTerm.value=''; newDefinition.value='';">Submit</button>
  </form>
  `
})

export class NewTermComponent {
  @Output() newTermSender = new EventEmitter();

  submitForm(term: string, definition: string, language: string) {
    let newTerm: Term = new Term(term, definition, language);
    this.newTermSender.emit(newTerm);
  }

}
