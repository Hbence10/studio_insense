import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { LoginComponent } from './components/login/login.component';
import { languageResolver } from './languageResolver';
import { ProjectEditorComponent } from './components/projects/project-editor/project-editor.component';

export const routes: Routes = [
  { path: "projects", loadComponent: () => import("./components/projects/projects.component").then(c => c.ProjectsComponent) },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "unauthorized", component: UnauthorizedComponent },
  { path: "publications", component: PublicationsComponent },
  { path: "aboutUs", component: AboutusComponent },
  { path: "services", component: ServicesComponent },
  { path: "project/:id", component: ProjectDetailsComponent },
  { path: "project/:id/edit", component: ProjectEditorComponent},
  { path: "UVRquGR0La1l6GXK0EcBVY02blFgzMCCdq7IhfjMHtd", component: LoginComponent },
  { path: "**", component: NotFoundComponent, resolve: {lang: languageResolver} },
];
