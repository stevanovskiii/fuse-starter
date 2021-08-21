import { Component, ViewEncapsulation } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { Router } from '@angular/router';

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
    constructor(private _router: Router)
{
    
}
Zadaci(): void
{
    
    this._router.navigate(['/zadaci']);
}
}
