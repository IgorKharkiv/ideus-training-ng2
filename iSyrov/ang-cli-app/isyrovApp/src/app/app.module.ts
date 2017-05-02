import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import route modules
import { RouterModule, Routes } from '@angular/router';

// import page parts
import { NavigationComponent } from './page-parts/navigation/navigation.component';

//import page components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

// import google map component
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ProductItemComponent } from './page-parts/product-item/product-item.component';

// array of routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavigationComponent,
    ProductItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJyC36o1kkhuHlsOMT_H4-nvuEKnynb4I'
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
