package studioInsense.StudioInsense.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import studioInsense.StudioInsense.entity.Project;
import studioInsense.StudioInsense.entity.ProjectImage;
import studioInsense.StudioInsense.exception.NotFoundException;
import studioInsense.StudioInsense.repository.ProjectImageRepository;
import studioInsense.StudioInsense.repository.ProjectRepository;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjectImageService {

    private final ProjectRepository projectRepository;
    private final ProjectImageRepository projectImageRepository;

    public ResponseEntity<Object> addImagesToProject(Long id, List<MultipartFile> images) {
        Project searchedProject = projectRepository.findById(id).orElseThrow(() -> new NotFoundException(""));
        return ResponseEntity.ok(searchedProject);
    }

    public ResponseEntity<Object> deleteImage(Long id) {
        ProjectImage searchedImage = projectImageRepository.findById(id).orElseThrow(() -> new NotFoundException(""));
        projectImageRepository.delete(searchedImage);
        return ResponseEntity.ok("");
    }

    public ResponseEntity<Object> switchImage(Long id) {
        ProjectImage searchedImage = projectImageRepository.findById(id).orElseThrow(() -> new NotFoundException(""));
        return ResponseEntity.ok("");
    }
}
