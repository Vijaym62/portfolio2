// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxCarouselModule } from 'ngx-carousel';



export const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'contact',component:ContactComponent},
{path:'portfolio',component:PortfolioComponent},
{path:'resume',component:ResumeComponent},
{path:'**',component:HomeComponent,pathMatch:'full'},
{path:'footer',component:FooterComponent},
// {path:'featured-project',component:FeaturedProjectComponent},

];
@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserModule,
      MatButtonModule,
      MatDialogModule],
    exports: [RouterModule,BrowserModule,],
  })


  export class AppRoutingModule {  }