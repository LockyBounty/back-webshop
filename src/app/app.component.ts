import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  title = 'webshop-adm';

  isMenuOpen = true;
  contentMargin = 240;

  messages = this.http.get<any[]>('http://localhost:8083/');


  constructor(private http: HttpClient){}

  onToolbarToggle(){
    console.log("lol");
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  post(){
    this.http.post<any>('http://localhost:8083/users', {username:"lol", password:"1234"})
    .subscribe(next=> console.log(next))
  }
}
