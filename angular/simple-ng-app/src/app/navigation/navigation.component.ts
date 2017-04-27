import { Component } from '@angular/core';
import { Home } from '../pages/home/home.component'
import { appRoutes } from '../routes';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class Navigation {

    routes: any;

    constructor(private homeComponent: Home) {
        // this.homeComponent = new Home();
        this.routes = appRoutes;
    }
}