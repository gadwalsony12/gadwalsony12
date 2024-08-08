import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  value = true;
  textcolor = 'yellow';
  number = 0.879;
  arr = ['a','b','c'];
  obj = {key:1, key2:2};
  date = new Date();
  constructor(){

  }

}
