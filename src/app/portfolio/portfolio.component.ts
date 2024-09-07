// import { Component, inject, OnInit } from '@angular/core';
// import { ProjectService } from '../services/project.service';
// import { Project } from '../models/project';
// import { Title } from '@angular/platform-browser';
// // import { ProjectCardComponent } from "./project-card/project-card.component";

// @Component({
//   selector: 'app-portfolio',
//   standalone: true,
//   imports:  [],
//   templateUrl: './portfolio.component.html',
//   styleUrl: './portfolio.component.scss'
// })
// // export class PortfolioComponent implements OnInit{
// //   project={} as Project[];
// // typescript:boolean=false
// // // projects=inject(ProjectService)  

// //   constructor(private titleService:Title,private projectService: ProjectService){
// //     this.titleService.setTitle('vijay mali - Portfolio')
// //   }
// //   ngOnInit(): void {
// //     this.project =this.projectService.GetProjects();
// //   }
// // }


// export class PortfolioComponent implements OnInit {
//   projects: Project[] = [];

//   constructor(private titleService: Title, private projectService: ProjectService) {
//     this.titleService.setTitle('Vijay Mali - Portfolio');
//   }

//   ngOnInit(): void {
//     this.projects = this.projectService.GetProjects();
//   }
// }

////////////////////////


import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
// import { ProjectCardComponent } from './project-card/project-card.component';  // Import the component
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent
  ]
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Vijay Mali - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}

