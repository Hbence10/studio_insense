import { Component, inject, OnInit } from '@angular/core';
import { FrontendService } from '../../../services/frontend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent implements OnInit {
  frontendService = inject(FrontendService)
  private projectService = inject(ProjectService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  userService = inject(UserService)
  errorMsg: string | null = null
  searchedProject!: Project
  showDeleteConfirmation: boolean = false
  showImageViewer: boolean = false

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => {
        const id: number = +param["id"]
        this.projectService.getProjectById(id).subscribe({
          next: response => {
            this.searchedProject = response
          },
          error: error => {
            console.log(error)
          }
        })

      },
      error: error => {

      }
    })
  }

  handleError() {

  }

  deleteProject() {
    this.projectService.deleteProject(this.searchedProject.id).subscribe({
      next: response => {
        this.router.navigate([""])
      }, error: error => {

      }
    })
  }
}
