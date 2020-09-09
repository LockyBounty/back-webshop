import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import {MatDialog, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  
  hide = true;

  myForm: any = {};
  isLoggedIn = false;
  isSuccessful =false; 
  isSignUpFailed = false;
  errorMessage= "";

  minPw = 6;

  time: number = 3;
  interval;

  constructor(
    private authService : AuthService,
    private router: Router,
    private token: TokenStorageService,
    public dialog: MatDialog) { }

  ngOnInit() : void{
    if (this.token.getToken()){
      this.isLoggedIn = true;
    }
  }

  onSubmit(){
    // console.log(this.myForm)
    this.authService.register(this.myForm).subscribe(
      data=>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.startTimer(); //redirection countdown
        setTimeout(()=>{
          this.router.navigate(['auth','login']);
        }, 3000);
        
        
      },
      err =>{
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        // this.openDialog(this.isSuccessful)
      }
    )
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.time--;
    },1000)
  }

  // openDialog(resultat) {
  //   const result:boolean = resultat;
  //   this.dialog.open(RegisterDialog);
  //   }
    
}


//pour la popup de confirmation

// @Component({
//   selector: 'register-dialog',
//   templateUrl: 'register-dialog.html',
// })

// export class RegisterDialog {}