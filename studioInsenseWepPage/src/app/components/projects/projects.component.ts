import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Router } from '@angular/router';
import { FrontendService } from '../../services/frontend.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projectService = inject(ProjectService)
  frontendService = inject(FrontendService)
  projects: Project[][] = []
  router = inject(Router)
  isError: boolean = false

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe({
      next: (response) => {
        for (let i: number = 0; i < response.length; i+=3) {
          const projectRow: Project[] = []
          for (let j = i; j < i+3; j++) {
            projectRow.push(response[j])
          }
          this.projects.push(projectRow)
        }
        console.log(this.projects)
      },
      error: () => {
        this.isError = true
      }
    })
  }

  checkProject(id: number) {
    this.router.navigate([`project/${id}`])
  }
}
