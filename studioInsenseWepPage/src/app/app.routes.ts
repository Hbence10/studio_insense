import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectCreatorComponent } from './components/project-creator/project-creator.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ServicesComponent } from './components/services/services.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { languageResolver } from './languageResolver';
import { AuthGuard } from './routerGuards/AuthGuard';
import { RoleGuard } from './routerGuards/RoleGuard';

export const routes: Routes = [
  { path: "projects", loadComponent: () => import("./components/projects/projects.component").then(c => c.ProjectsComponent) },
  { path: "", pathMatch: "full", redirectTo: "projects" },
  { path: "unauthorized", component: UnauthorizedComponent },
  { path: "publications", component: PublicationsComponent },
  { path: "aboutUs", component: AboutusComponent },
  { path: "services", component: ServicesComponent },
  { path: "project/create", component: ProjectCreatorComponent,
    //scanMatch: [AuthGuard, RoleGuard]
  },
  { path: "project/edit/:id", component: ProjectCreatorComponent},
  { path: "project/:id", component: ProjectDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotFoundComponent, resolve: { lang: languageResolver } },
];
