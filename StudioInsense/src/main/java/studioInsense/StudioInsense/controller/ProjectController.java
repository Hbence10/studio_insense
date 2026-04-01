package studioInsense.StudioInsense.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studioInsense.StudioInsense.dto.ProjectDto;
import studioInsense.StudioInsense.service.ProjectService;

@RestController
@RequestMapping("/project")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    private ResponseEntity<Object> getAllProject() {
        return projectService.getAllProject();
    }

    @GetMapping("/{id}")
    private ResponseEntity<Object> getProjectById(@PathVariable Long id){
        return projectService.getProjectById(id);
    }

    @PostMapping
    private ResponseEntity<Object> createProject(@RequestBody @Valid ProjectDto newProjectDto) {
        return projectService.createProject(newProjectDto);
    }

    @PutMapping("/{id}")
    private ResponseEntity<Object> updateProject(@RequestBody @Valid ProjectDto updatedProjectDto, @PathVariable Long id) {
        return projectService.updateProject(updatedProjectDto, id);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Object> deleteProject(@PathVariable Long id) {
        return projectService.deleteProject(id);
    }
}
