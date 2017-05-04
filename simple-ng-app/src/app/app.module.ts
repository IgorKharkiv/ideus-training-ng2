import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

// Bootstrap:
import { AppComponent } from './app.component';

// Pages:
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCardComponent } from './pages/products//product-card.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

import { NavigationComponent } from './components/navigation/navigation.component';


// Routes:
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  // { path: '**', component: PageNotFoundComponent }
];


// Declaration:
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ProductCardComponent,
    ContactUsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgKVadmUIo9gxo76iF2uAGbKEvA2KoLnA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
