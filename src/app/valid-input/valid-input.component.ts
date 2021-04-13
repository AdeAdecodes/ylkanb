import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-valid-input',
  templateUrl: './valid-input.component.html',
  styleUrls: ['./valid-input.component.scss']
})
export class ValidInputComponent implements OnInit {

  constructor() { }

  @Input() placeHolder: string;
  @Input() inputType: string = 'text';
  @Input() control: FormControl;

  ngOnInit() {
  }

  showError(){
    const {touched, dirty, errors} = this.control;
    return touched && dirty && errors;
  }
}
