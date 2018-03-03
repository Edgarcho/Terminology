import { Component } from '@angular/core';
import { Term } from './term.model';

@Component({
  selector: 'app-root',
  template: `
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Terminology</a>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="https://www.codecademy.com/articles/glossary-html">HTML Glossary</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.codecademy.com/articles/glossary-css">CSS Glossary</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://www.oracle.com/technetwork/java/glossary-135216.html">Java Glossary</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript Resource</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
    <div class="container">
      <new-term (newTermSender)='addTerm($event)'></new-term>
      <edit-term [childSelectedTerm]="selectedTerm" (doneButtonClickSender)="finishedEditing()"></edit-term>
      <term-list [childTermList]="masterTermList" clickSender='editTerm($event)'></term-list>
    </div>
  `
})

export class AppComponent {
  selectedTerm: null;

  masterTermList: Term[] =[
    new Term("Model-View-Controller","A type of design followed by many frameworks (including Angular) in which application, and all interactions are managed by models, views, and controllers.", "JavaScript"),
    new Term("Component", "A small, reusable package of both front and back-end code that works together. That means components handle both rendering front-end pieces of user interface and any back-end logic required to make those front-end elements interactive.", "JavaScript"),
    new Term("Software Design Patterns", "are commonplace, longstanding ways to design and develop complex applications. They are usually language-agnostic, meaning they can be found in different languages, although usually implemented slightly differently.", "Java"),
  ];

  editTerm(clickedTerm){
    debugger;
    this.selectedTerm = clickedTerm;
  }
  finishedEditing(){
    this.selectedTerm = null;
  }
  addTerm(newTermFromChild: Term){
    this.masterTermList.push(newTermFromChild);
  }

}
