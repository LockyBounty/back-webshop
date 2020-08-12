import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      emailAddress: [null, [Validators.required, this.emailValidator]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  emailValidator(control) {
    if (control.value) {
      const matches = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
      return matches ? null : { 'invalidEmail': true };
    } else {
      return null;
    }
  }

  test(){
    console.log(this.myForm.value);
    // accéder à l'objet du formulaire envoyé
  }

}
