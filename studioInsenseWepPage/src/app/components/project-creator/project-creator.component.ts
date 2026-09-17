import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-creator',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './project-creator.component.html',
  styleUrl: './project-creator.component.scss',
})
export class ProjectCreatorComponent implements OnInit {
  form!: FormGroup
  selectedProject = signal<Project | null>(null)
  projectService = inject(ProjectService)
  route = inject(ActivatedRoute)
  errorMsg: string = ""
  private id: number = 0

  ngOnInit(): void {
    this.route.params.subscribe({
      next: paramResponse => {
        if (paramResponse["id"] != undefined) {
          this.id = paramResponse["id"]
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
    this.projectService.createProject({
      titleHu: this.form.controls["titleHun"].value,
      titleEng: this.form.controls["titleEng"].value,
      descriptionHu: this.form.controls["descriptionHun"].value,
      descriptionEng: this.form.controls["descriptionEng"].value,
      cardTitleHu: this.form.controls["cardTitleHun"].value,
      cardTitleEng: this.form.controls["cardTitleEng"].value
    }).subscribe({
      next: (response) => { },
      error: (error) => { },
      complete: () => { }
    })
  }

  saveUpdate() {
    this.projectService.updateProject({
      titleHu: this.form.controls["titleHun"].value,
      titleEng: this.form.controls["titleEng"].value,
      descriptionHu: this.form.controls["descriptionHun"].value,
      descriptionEng: this.form.controls["descriptionEng"].value,
      cardTitleHu: this.form.controls["cardTitleHun"].value,
      cardTitleEng: this.form.controls["cardTitleEng"].value
    }, this.id).subscribe({
      next: (response) => { },
      error: (error) => { },
      complete: () => { }
    })
  }

  uploadFiles() {

  }
}
