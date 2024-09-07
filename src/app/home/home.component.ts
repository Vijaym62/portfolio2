import { Component, NgModule, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';
import { CommonModule } from '@angular/common';
import { FeaturedProjectComponent } from '../featured-project/featured-project.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{



  featuredProject={} as Project;
  constructor(private titleService:Title,private projectService:ProjectService){
    this.titleService.setTitle('vijay mali - Home')
  }
  ngOnInit(): void {
   this.featuredProject=this.projectService.GetProjectById(0);
  }

///////////////////

currentSlide: number = 0

onSlideChange(newSlide: number) {
  this.currentSlide = newSlide;
}


nextSlide() {
  this.currentSlide = (this.currentSlide + 1) % this.featuredProject.pictures.length;
}

prevSlide() {
  this.currentSlide = (this.currentSlide - 1 + this.featuredProject.pictures.length) % this.featuredProject.pictures.length;
}





}
