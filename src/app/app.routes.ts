import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { KnowComponent } from './know/know.component';
import { SubmitComponent } from './submit/submit.component';

export const routes: Routes = [
    { path:'portfolio-website', loadChildren:()=> import('./portfolio-website/portfolio-website.module').then(m => m.PortfolioWebsiteModule)
    
},


    

    
];
