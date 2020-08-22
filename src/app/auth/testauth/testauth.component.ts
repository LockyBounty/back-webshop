import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../services/auth.service'


@Component({
  selector: 'app-testauth',
  templateUrl: './testauth.component.html',
  styleUrls: ['./testauth.component.scss']
})
export class TestauthComponent implements OnInit {
  // mySubscribeForm : FormGroup;
  mySubscribeForm : any ={};
  isSuccessful =false; 
  isSignUpFailed = false;
  errorMessage= "";

  //dans ngoninit avec formgroup
  // this.mySubscribeForm = this.fb.group({
  //   username: [null, [Validators.required, Validators.minLength(4)]],
  //   emailAddress: [null, [Validators.required, this.emailValidator]],
  //   password: [null, [Validators.required, Validators.minLength(6)]]
  // })

  constructor(private authService : AuthService) { }

  ngOnInit() {
    
  }

  // emailValidator(control) {
  //   if (control.value) {
  //     const matches = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
  //     return matches ? null : { 'invalidEmail': true };
  //   } else {
  //     return null;
  //   }
  // }

  onSubmit(){
    this.authService.register(this.mySubscribeForm).subscribe(
      data=>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err =>{
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    )
  }

  // test(){
  //   console.log(this.mySubscribeForm.value);
  //   // accéder à l'objet du formulaire envoyé
  // }

}



