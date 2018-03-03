import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Term } from './Term.model';

@Component({
  selector: 'edit-term',
  template: `
  <h3>Edit</h3>
  <div *ngIf='childSelectedTerm'>
      <h3>Edit Animal Record</h3>
      <label for='name'>Name:</label>
      <input [(ngModel)]='childSelectedTerm.term'>
      <br>
      <label for='caretakers'>Caretakers:</label>
      <input [(ngModel)]='childSelectedTerm.definition'>
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
