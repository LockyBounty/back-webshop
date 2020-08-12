import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import {HttpClientModule} from '@angular/common/http';


import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';


import { LayoutModule } from '@angular/cdk/layout';

import {MaterialModule} from "./material-module";

import { ProductsComponent } from './dashboard/products/products.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { UsersComponent } from './dashboard/users/users.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { TestmeComponent } from './testme/testme.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const appRoutes : Routes = [
  {
    path: "", redirectTo : "auth",pathMatch: 'full' 
  },
  // {
  //   path: "", component : AppComponent,
  // },
  {
    path: "dashboard", 
    component : DashboardComponent,
    children: [
      {
        path:'',//<--le root redirige par default à l'enfant 'overview'
        redirectTo: 'overview',
        pathMatch: 'full' 
      },
      {path: "overview", component: OverviewComponent},
      {path: "products", component: ProductsComponent},
      {path: "orders", component: OrdersComponent},
      {path: "users", component: UsersComponent},
      {path: "messages", component: MessagesComponent},
    ]
  },
  {
    path: "auth", 
    component : AuthComponent,
    children: [
      {
        path:'',//<--le root redirige par default à l'enfant 'login'
        redirectTo: 'login',
        pathMatch: 'full' 
      },
      {path: "login", component: LoginComponent},
      {path: "register", component: RegisterComponent},
    ]
  },
  {
    path: "test", component : TestmeComponent
  },

  {
    path: "**", redirectTo : ""
  },
  

]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthComponent,
    HeaderComponent,
    ProductsComponent,
    OrdersComponent,
    UsersComponent,
    MessagesComponent,
    TestmeComponent,
    OverviewComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration:"enabled"}),
    SidebarModule.forRoot(),

    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    HttpClientModule,
  
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
