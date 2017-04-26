import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class Navigation {
    currentClass: string = 'current';
    currentItem(e) {
        event.preventDefault();
        const el = e.target;
        const navList: any = document.querySelectorAll("navigation a");
        for (let i = 0; i < navList.length; i++ ){
            navList[i].classList.remove(this.currentClass);
        }
        el.classList.add(this.currentClass);
    }
}