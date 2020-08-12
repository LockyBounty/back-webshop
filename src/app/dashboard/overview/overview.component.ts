import { Component, OnInit } from '@angular/core';
import { faDolly, faShoppingCart, faUserAstronaut, faRetweet, faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  faUser = faUserAstronaut;
  faOrder = faDolly;
  faRetweet = faRetweet;

  constructor() { }

  ngOnInit(): void {
  }

}
