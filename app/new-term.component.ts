import { Component, Output, EventEmitter } from '@angular/core';
import { Term } from './term.model';

@Component({
  selector: 'new-term',
  template: `
  <form id="newTermForm">
    <div class="form-row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Term" #newTerm>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Definition" #newDefinition>
      </div>
    </div>
    <div class="form-group col-md-4">
     <label for="inputState">Language</label>
     <select #newLanguage class="form-control">
       <option [value]="HTML">HTML</option>
       <option [value]="CSS">CSS</option>
       <option [value]="Java">Java</option>
       <option [value]="JavaScript">JavaScript</option>
     </select>
    </div>
    <button class="btn btn-primary" (click)="submitForm(newTerm.value, newDefinition.value, newLanguage.value); newTerm.value=''; newDefinition.value=''; newLanguage.value='';">Submit</button>
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
