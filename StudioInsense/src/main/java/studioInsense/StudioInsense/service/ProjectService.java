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

@Service
@Transactional
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ResponseEntity<Object> getAllProject() {
        return ResponseEntity.ok(projectRepository.findByIsDeleted(false));
    }

    public ResponseEntity<Object> getProjectById(Long id) {
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
}
