import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface Titre { 
  value: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  mySubscribeForm : FormGroup;

  titres: Titre[]=[
    {value:"Agent de liaison"},
    {value: "Fournisseur"},
    {value: "Gestionnaire"}]

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.mySubscribeForm = this.fb.group({
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

}
