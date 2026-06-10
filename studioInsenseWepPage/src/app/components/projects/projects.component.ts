import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projectService = inject(ProjectService)
  projects: Project[] = []
  router = inject(Router)
  isError: boolean = false

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe({
      next: (response) => {
        this.projects = response
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
