import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient)
  baseUrl: string = "http://localhost:8080/project"

  getAllProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl)
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`)
  }

  deleteProject(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
