import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { AppComponent } from './src/app/app.component';
import { PortfolioComponent } from './src/app/portfolio/portfolio.component';
import { ProjectCardComponent } from './src/app/project-card/project-card.component';
import { NgxCarouselModule } from 'ngx-carousel';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
// import { SwiperModule } from 'swiper/angular';SwiperModule


@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    AppComponent,
    PortfolioComponent,
    ProjectCardComponent,
  
    // other imports
  ],
  // other properties
})
export class AppModule { }
