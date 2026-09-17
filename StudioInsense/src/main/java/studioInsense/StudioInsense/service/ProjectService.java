package studioInsense.StudioInsense.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import studioInsense.StudioInsense.dto.ProjectDto;
import studioInsense.StudioInsense.entity.Project;
import studioInsense.StudioInsense.exception.NotFoundException;
import studioInsense.StudioInsense.repository.ProjectRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ResponseEntity<List<Project>> getAllProject() {
        return ResponseEntity.ok(projectRepository.findByIsDeleted(false));
    }

    public ResponseEntity<Project> getProjectById(Long id) {
        Project searchedProject = projectRepository.findByIdAndIsDeleted(id, false).orElseThrow(() -> new NotFoundException(""));
        return ResponseEntity.ok(searchedProject);
    }

    public ResponseEntity<Object> deleteProject(Long id) {
        Project searchedProject = projectRepository.findByIdAndIsDeleted(id, false).orElseThrow(() -> new NotFoundException(""));
        searchedProject.setIsDeleted(true);
        searchedProject.setDeletedAt(LocalDateTime.now());
        projectRepository.save(searchedProject);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<Project> createProject(ProjectDto newProjectDto) {
        Project newProject = new Project(newProjectDto);
        return ResponseEntity.ok(projectRepository.save(newProject));
    }

    public ResponseEntity<Project> updateProject(Long id, ProjectDto updatedProject) {
        Project searchedProject = projectRepository.findByIdAndIsDeleted(id, false).orElseThrow(() -> new NotFoundException(""));
        searchedProject.setTitleHu(updatedProject.titleHu());
        searchedProject.setDescriptionHu(updatedProject.descriptionHu());
        searchedProject.setCardTitleHu(updatedProject.cardTitleHu());
        searchedProject.setTitleEng(updatedProject.titleEng());
        searchedProject.setDescriptionEng(updatedProject.descriptionEng());
        searchedProject.setCardTitleEng(updatedProject.cardTitleEng());
        return ResponseEntity.ok(projectRepository.save(searchedProject));
    }
}
