import { Component, inject, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-creator',
  imports: [ReactiveFormsModule],
  templateUrl: './project-creator.component.html',
  styleUrl: './project-creator.component.scss',
})
export class ProjectCreatorComponent implements OnInit {
  form!: FormGroup
  selectedProject = input<Project>()
  projectService = inject(ProjectService)

  ngOnInit(): void {
    this.form = new FormGroup({
      titleHun: new FormControl("", [Validators.required]),
      titleEng: new FormControl("", [Validators.required]),
      descriptionHun: new FormControl("", [Validators.required]),
      descriptionEng: new FormControl("", [Validators.required]),
      cardTitleHun: new FormControl("", [Validators.required]),
      cardTitleEng: new FormControl("", [Validators.required]),
      cardImage: new FormControl("", [Validators.required]),
      images: new FormControl("", [Validators.required])
    })
  }

  saveChanges() {
    if (this.selectedProject() === undefined) {
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
