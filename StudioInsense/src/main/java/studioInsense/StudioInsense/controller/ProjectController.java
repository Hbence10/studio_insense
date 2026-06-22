package studioInsense.StudioInsense.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studioInsense.StudioInsense.dto.ProjectDto;
import studioInsense.StudioInsense.entity.Project;
import studioInsense.StudioInsense.service.ProjectService;

import java.util.List;

@RestController
@RequestMapping("/project")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    private ResponseEntity<List<Project>> getAllProject() {
        return projectService.getAllProject();
    }

    @GetMapping("/{id}")
    private ResponseEntity<Project> getProjectById(@PathVariable Long id){
        return projectService.getProjectById(id);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Object> deleteProject(@PathVariable Long id) {
        return projectService.deleteProject(id);
    }

    @PostMapping
    private ResponseEntity<Project> createProject(@RequestBody @Valid ProjectDto newProject) {
        return projectService.createProject(newProject);
    }

    @PutMapping("/{id}")
    private ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody @Valid ProjectDto updatedProject ) {
        return projectService.updateProject(id, updatedProject);
    }
}
