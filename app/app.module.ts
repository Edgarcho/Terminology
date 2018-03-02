import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { TermListComponent } from './term-list.component';
import { NewTermComponent } from './new-term.component';
import { CompletenessPipe } from './completeness.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TermListComponent, NewTermComponent, CompletenessPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
