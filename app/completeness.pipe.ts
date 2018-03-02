import { Pipe, PipeTransform } from '@angular/core';
import { Term } from './term.model';

@Pipe({
  name: 'completeness',
  pure: false
})


export class CompletenessPipe implements PipeTransform {
  transform(input: Term[], desiredCompleteness){
  var output: Term[] = [];
  if(desiredCompleteness === "HTML"){
    for (var i = 0; i < input.length; i++) {
      if (input[i].language === "HTML") {
        output.push(input[i]);
      }
    }
    return output;
  } else if(desiredCompleteness === "CSS"){
    for (var i = 0; i < input.length; i++) {
      if (input[i].language === "CSS") {
        output.push(input[i]);
      }
    }
    return output;
  }else if(desiredCompleteness === "Java"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].language === "Java") {
          output.push(input[i]);
        }
      }
      return output;
  }else if(desiredCompleteness === "JavaScript"){
    for (var i = 0; i < input.length; i++) {
      if (input[i].language === "JavaScript") {
        output.push(input[i]);
      }
    }
    return output;
  }else{
    return input;
    }
  }
}
