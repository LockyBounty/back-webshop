import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faDolly, 
  faShoppingCart, 
  faUserAstronaut, 
  faCommentDollar, 
  faChartPie,
  faUserAlt } from '@fortawesome/free-solid-svg-icons';


import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('drawer') drawer: any; //<-- chope le #drawer dans le html (mat-sidenav)
  @Output() public sidenavToggle = new EventEmitter();

  accountOptions: any[] = ['Paramètres', 'Deconnexion'];

  isVisible = false;

  overview = faChartPie;
  liste = faShoppingCart;
  palette = faDolly;
  utilisateur = faUserAstronaut;
  commentaire = faCommentDollar;
  deconnexion = faUserAlt;

  currentUser: any;

  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  private roles : string[];

  isDisabled : boolean;
  index: number;
  tab: number=0;
  
  constructor(private breakpointObserver: BreakpointObserver, 
    private fb: FormBuilder,
    private router: Router, 
    private route : ActivatedRoute,
    private token: TokenStorageService) {}


  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn){
      const user = this.token.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
    this.currentUser = this.token.getUser(); //si token acces au component
  }

  //<-- isHandset va consulter selon la taille de l'écran et envoyer les instructions sur le sidebar ici
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  //<-- envoie vers la route enfant du component actuel
  //<-- routerLink fait la même chose
  //<-- attention private route: ActivatedRoute
 
  // disprod(f:any){
  //   f.classList.add('hovermedisable');
  // }
  // ativprod(f:any){
  //   f.classList.add('hoverme');
  // }

  //<--pour sidebar hors mobile
  goOverview(){
    this.tab = 0;
    this.router.navigate(['overview'], {relativeTo :this.route});
  }
  goProducts(){
    this.tab = 1;
    this.router.navigate(['products'], {relativeTo :this.route});
  }
  goOrders(){
    this.tab = 2;
    this.router.navigate(['orders'], {relativeTo :this.route});
  }
  goUsers(){
    this.tab = 3;
    this.router.navigate(['users'], {relativeTo :this.route});
  }
  goMessages(){
    this.tab = 4;
    this.router.navigate(['messages'], {relativeTo :this.route});
    
  }


  //<--pour sidebar hors mobile
  goOverview2(){
    this.tab = 0;
    this.router.navigate(['overview'], {relativeTo :this.route});
    this.onToggleSidenav();
  }
  goProducts2(){
    this.tab = 1;
    this.router.navigate(['products'], {relativeTo :this.route});
    this.onToggleSidenav();
  }
  goOrders2(){
    this.tab = 2;
    this.router.navigate(['orders'], {relativeTo :this.route});
    this.onToggleSidenav();
  }
  goUsers2(){
    this.tab = 3;
    this.router.navigate(['users'], {relativeTo :this.route});
    this.onToggleSidenav();
  }
  goMessages2(){
    this.tab = 4;
    this.router.navigate(['messages'], {relativeTo :this.route});
    this.onToggleSidenav();
  }
  
  logout(){
    this.token.signOut();
    window.location.reload(); //rafraichir la page sinon reste bloqué
  }

  //<-- link active méthode Diogo
//   previouspage = null;
//   async test1(f:any, dst:string) {
//     await this.router.navigate([dst], {relativeTo :this.route});
//     let url = await window.location.href.split("/")
//     let activatepage = url[url.length-1];
//     // await console.log('url',url[url.length-1]);
//     // await console.log('destination' ,dst);
//     // await console.log(document.getElementsByClassName("list-group-item")[0].textContent);

//     if (this.previouspage === null) {
//       this.previouspage = f;
//     }else{
//       this.previouspage.classList.remove("hoverme");
//       this.previouspage.classList.add('hovermedisable');
//       f.classList.add('hoverme');
//       f.classList.remove('hovermedisable');
//     }
//     if (activatepage ===dst){
      
//       f.classList.add('hoverme');
//       f.classList.remove('hovermedisable');
//       this.previouspage =f;
//   }else{
//     f.classList.remove('hoverme');
//     f.classList.add('hovermedisable');
//   }
// }
  //<-- ouvre-ferme le sidenav
  popping(){
      this.drawer.diplay.none;
  }

  onToggleSidenav() {
    this.isVisible ? this.isVisible=false : this.isVisible=true;
    // console.log(this.isVisible);
    this.sidenavToggle.emit();
  }
  
}
