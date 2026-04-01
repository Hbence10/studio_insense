package studioInsense.StudioInsense.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import studioInsense.StudioInsense.dto.ProjectDto;
import studioInsense.StudioInsense.repository.ProjectRepository;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ResponseEntity<Object> getAllProject() {
        return null;
    }

    public ResponseEntity<Object> getProjectById(Long id) {
        return null;
    }

    public ResponseEntity<Object> createProject(ProjectDto newProjectDto) {
        return null;
    }

    public ResponseEntity<Object> updateProject(ProjectDto updatedProject, Long id) {
        return null;
    }

    public ResponseEntity<Object> deleteProject(Long id) {
        return null;
    }
}
