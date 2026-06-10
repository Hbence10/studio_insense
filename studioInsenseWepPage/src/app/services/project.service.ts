import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  http = inject(HttpClient)
  baseUrl: string = ""

  getAllProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl)
  }

  getProjectById(id: number) {
    return this.http.get<Project>("")
  }
}
