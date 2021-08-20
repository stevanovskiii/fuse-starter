import { Component, ViewEncapsulation } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation';

@Component({
    selector     : 'home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./home.style.css']
})
export class HomeComponent
{
    /**
     * Constructor
     */
    constructor()
{}
}
