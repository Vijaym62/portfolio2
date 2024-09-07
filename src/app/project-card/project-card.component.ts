// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-project-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './project-card.component.html',
//   styleUrl: './project-card.component.scss'
// })
// export class ProjectCardComponent {

// }


import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { Project } from '../../models/project';
// import { ProjectModalComponent } from './../project-modal/project-modal.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Project } from '../models/project';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule]
})
export class ProjectCardComponent {
  @Input() project!: Project;  // Ensure this is defined

  constructor(private dialog: MatDialog) {}

  openProjectModal() {
    this.dialog.open(ProjectModalComponent, {
      width: '60% ',height:'80%',
      data: { project: this.project }
    });
  }
}
