// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'port-app2';
// }
///////////////////////
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { CustomCarouselComponent } from "./project-modal/custom-carousel/custom-carousel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, ContactComponent, HomeComponent, FooterComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}
  