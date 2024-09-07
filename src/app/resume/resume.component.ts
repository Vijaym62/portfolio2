import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule,MatExpansionModule,MatIconModule,
    MatButtonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  isWorkExperianceOpen:boolean=false

  openAccordion: string | null = null;

  isOpen: string = ''; 
expanded: any;
  toggleAccordion(section: string) {
    // If the clicked section is already open, close it; otherwise, open it
    this.openAccordion = this.openAccordion === section ? null : section;
  }


  constructor(private titleService:Title,private renderer:Renderer2){
    this.titleService.setTitle('vijay mali - Resume')
  }

  DownloadFile(){
 const link =this.renderer.createElement('a');
 link.setAttribute('target','_blank');
 link.setAttribute('href', '/assets/MyResume.pdf');
 link.setAttribute('download','MyResume.pdf');
//  document.body.appendChild(link); 
 link.click();
 link.remove();
  }
}
