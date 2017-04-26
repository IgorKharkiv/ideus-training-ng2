import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Home } from './pages/home/home.component';
import { About } from './pages/about/about.component';
import { Contact } from './pages/contact/contact.component';
import { Products } from './pages/products/products.component';
import { Navigation } from './navigation/navigation.component';

const appRoutes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'products',
    component: Products
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    About,
    Contact,
    Products,
    Navigation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
