import { Component, OnInit } from '@angular/core';
import { appRoutes } from '../../routes';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']    
})
export class NavigationComponent implements OnInit {
    routes: any;
    constructor() { 
        this.routes = appRoutes.splice(1, appRoutes.length);
     }

    ngOnInit() { }
}