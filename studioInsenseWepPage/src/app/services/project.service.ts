import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { ProjectDto } from '../models/projectDto';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient)
  private baseUrl: string = "http://localhost:8080/project"

  getAllProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl)
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`)
  }

  deleteProject(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  createProject(newProject: ProjectDto) {
    return this.http.post(this.baseUrl, newProject)
  }

  updateProject(newProject: ProjectDto, id: number) {
    return this.http.put(`${this.baseUrl}/${id}`, newProject)
  }
}
