import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private aRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  toLogin(){
    this.router.navigate(['login'], {relativeTo :this.aRoute});
  }
  toRegister(){
    this.router.navigate(['register'], {relativeTo :this.aRoute});
  }

  switchTab($event){
    //<-- $event ici est un objet avec l'index du tab sur lequel on clique
    // console.log($event) 
    if ($event.index === 0 ){
      this.router.navigate(['login'], {relativeTo :this.aRoute});
    }
    else if ($event.index === 1){
      this.router.navigate(['register'], {relativeTo :this.aRoute});
    }
  }

}
