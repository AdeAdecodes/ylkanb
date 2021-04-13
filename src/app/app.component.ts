import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  results: string='';
  //Here we are using dependency injection to use the custom validator
  constructor(){}


  signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{11}")]),
    email: new FormControl('', [Validators.required, Validators.email])
  })//This is the custom validator


 submit(){
  this.results = JSON.stringify(this.signupForm.value) 
   localStorage.setItem("value", this.results)
 }

  
}