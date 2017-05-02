import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

export const appRoutes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        title: "home",
        path: "home",
        component: HomeComponent
    },
    {
        title: "products",
        path: "products",
        component: ProductsComponent
    },
    {
        title: "about-us",
        path: "about-us",
        component: AboutUsComponent
    },
    {
        title: "contact-us",
        path: "contact-us",
        component: ContactUsComponent
    },
]