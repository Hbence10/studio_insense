import { Component, inject, input, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-creator',
  imports: [ReactiveFormsModule],
  templateUrl: './project-creator.component.html',
  styleUrl: './project-creator.component.scss',
})
export class ProjectCreatorComponent implements OnInit {
  form!: FormGroup
  selectedProject = signal<Project | null>(null)
  projectService = inject(ProjectService)
  route = inject(ActivatedRoute)
  errorMsg: string = ""

  ngOnInit(): void {
    this.route.params.subscribe({
      next: paramResponse => {
        if (paramResponse["id"] != undefined) {
          this.projectService.getProjectById(paramResponse["id"]).subscribe({
            next: response => {
              this.selectedProject.set(response)
            },
            error: (error) => {
              console.log(error)
            }
          })
        }
      }
    })

    this.form = new FormGroup({
      titleHun: new FormControl(this.selectedProject()?.titleHu || "", [Validators.required]),
      titleEng: new FormControl(this.selectedProject()?.titleEng || "", [Validators.required]),
      descriptionHun: new FormControl(this.selectedProject()?.descriptionHu || "", [Validators.required]),
      descriptionEng: new FormControl(this.selectedProject()?.descriptionEng || "", [Validators.required]),
      cardTitleHun: new FormControl(this.selectedProject()?.cardTitleHu || "", [Validators.required]),
      cardTitleEng: new FormControl(this.selectedProject()?.cardTitleEng || "", [Validators.required]),
      cardImage: new FormControl("", [Validators.required]),
      images: new FormControl("", [Validators.required])
    })
  }

  saveChanges() {
    if (this.selectedProject() === null) {
      this.createProject()
    } else {
      this.saveUpdate()
    }
  }

  createProject() {

  }

  saveUpdate() {

  }
}
