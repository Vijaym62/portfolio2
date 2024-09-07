import { Component, Inject, Input, inject, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
// import { NgxCarouselModule } from 'ngx-carousel';
// import { MatCarouselModule } from '@ngmodule/material-carousel
// import { NgxCarouselModule } from 'ngx-carousel';
// import { MatCarouselModule } from '@ngmodule/material-carousel'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectService } from '../../services/project.service';
// import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips';

// import { Component, Input } from '@angular/core';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// import { MatChipsModule } from '@angular/material/chips';
// import { CommonModule } from '@angular/common';







@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatChipsModule,MatCardModule,MatChipsModule
    ,
    MatDialogModule,
    ] ,
 // Import Angular Material Carousel module
  // Import Angular Material Carousel module
})
export class ProjectModalComponent {
// pictures:Pictures[]=[];
projectservice=inject(ProjectService)
currentImageIndex = 0;
  // projectpicture:ProjectPicture[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { project: Project }) {}

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.data.project.pictures.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.data.project.pictures.length) % this.data.project.pictures.length;
  }

}
