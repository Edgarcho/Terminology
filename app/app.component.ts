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
      <new-term (newTermSender) = "addTerm($event)"></new-term>
      <term-list [childTermList]="masterTermList"></term-list>
    </div>
  `
})

export class AppComponent {
  masterTermList: Term[] =[];

  addTerm(newTermFromChild: Term){
    this.masterTermList.push(newTermFromChild);
  }

}
