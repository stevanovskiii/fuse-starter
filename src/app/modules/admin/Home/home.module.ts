import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/modules/admin/Home/home.component';
import { MatIconModule } from '@angular/material/icon';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports     : [
        MatIconModule,
        RouterModule.forChild(exampleRoutes)
    ]
})
export class HomeModule
{
}
