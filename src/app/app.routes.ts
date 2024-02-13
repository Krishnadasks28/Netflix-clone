import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { BrowseComponent } from './pages/browse/browse/browse.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'browse',
        component:BrowseComponent
    },
    {
        path:'**',
        redirectTo:'login'
    }
];
