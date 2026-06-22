package studioInsense.StudioInsense.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import studioInsense.StudioInsense.entity.ProjectImage;
import studioInsense.StudioInsense.exception.NotFoundException;
import studioInsense.StudioInsense.repository.ProjectImageRepository;
import studioInsense.StudioInsense.repository.ProjectRepository;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjectImageService {

    private final ProjectRepository projectRepository;
    private final ProjectImageRepository projectImageRepository;


}
