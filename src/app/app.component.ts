import { Component, Injectable, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements OnInit{
  title = 'webshop-adm';

  isMenuOpen = true;
  contentMargin = 240;

  private roles : string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  

  // messages = this.http.get<any[]>('http://localhost:8083/');


  constructor( private token: TokenStorageService){} //<-- 

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      
    }
  }

  logout(): void {
      this.token.signOut();
      window.location.reload();
  }
  

  onToolbarToggle(){
    console.log("lol");
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  // post(){
  //   this.http.post<any>('http://localhost:8083/users', {username:"lol", password:"1234"})
  //   .subscribe(next=> console.log(next))
  // }
}
