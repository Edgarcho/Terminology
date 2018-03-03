import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Term } from './Term.model';

@Component({
  selector: 'edit-term',
  template: `
  <h3>Edit</h3>
<div *ngIf='childSelectedTerm'>
    <div class="form-group">
      <div class="col-md-4">
          <input [(ngModel)]='childSelectedTerm.term'>
      </div>
      <div class="col-md-4">
        <input [(ngModel)]='childSelectedTerm.definition'>
      </div>
    </div>
    <div class="col-sm-4">
     <select  class="custom-select custom-select-lg mb-3" [(ngModel)]='childSelectedTerm.language'>
      <option value="HTML"> HTML</option>
      <option value="CSS"> CSS</option>
      <option value="Java"> Java</option>
      <option value="JavaScript"> JavaScript</option>
     </select>
    </div>
    <button class='btn btn info' (click)='doneButtonClicked()'>Done</button>
</div>
  `
})

export class EditTermComponent {
  @Input() childSelectedTerm: Term;
  @Output() doneButtonClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickSender.emit();
  }
}
