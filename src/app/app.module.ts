import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';

//special connection
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './_helpers/auth.interceptor';

//services
import { AuthGuardService } from './services/auth-guard.service';


import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';


import { LayoutModule } from '@angular/cdk/layout';

import {MaterialModule} from "./material-module";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ProductsComponent } from './dashboard/products/products.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { UsersComponent } from './dashboard/users/users.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { TestmeComponent } from './testme/testme.component';

import { OverviewComponent } from './dashboard/overview/overview.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TestauthComponent } from './auth/testauth/testauth.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { HomeComponent } from './home/home.component';

import { ProductDetailsComponent } from './dashboard/products/product-details/product-details.component';
import { ProductAddingComponent } from './dashboard/products/product-adding/product-adding.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes : Routes = [
  {
    path: "", redirectTo : "dashboard",pathMatch: 'full' 
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
      {path: "products/:id", component: ProductDetailsComponent},
      {path: "product-adding", component: ProductAddingComponent},

      {path: "orders", component: OrdersComponent},
      {path: "users", component: UsersComponent},
      {path: "profile", component: ProfileComponent},
      {path: "messages", component: MessagesComponent},
    ],
    canActivate: [AuthGuardService]
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
      // {path: "testauth", component: TestauthComponent},
      {path: "register", component: RegisterComponent},
    ]
  },
  {  path: "test", component : TestmeComponent},
  {  path: "home", component : HomeComponent },
  {  path: "user", component : BoardUserComponent },
  {  path: "mod", component : BoardModeratorComponent },
  {  path: "admin", component : BoardAdminComponent },
  {  path: "not-found", component : NotFoundComponent },

  {  path: "**", redirectTo : "not-found" },
  

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
    RegisterComponent,
    TestauthComponent,
    ProfileComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    BoardAdminComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductAddingComponent,
    NotFoundComponent
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

    NgbModule,
    NgxPaginationModule
  
  ],
  exports:[RouterModule],
  providers: [
    authInterceptorProviders,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
