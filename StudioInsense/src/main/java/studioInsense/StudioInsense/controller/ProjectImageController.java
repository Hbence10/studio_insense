package studioInsense.StudioInsense.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import studioInsense.StudioInsense.service.ProjectImageService;

@RestController
@RequestMapping("/projectImg")
@RequiredArgsConstructor
public class ProjectImageController {

    private final ProjectImageService projectImageService;

    @PostMapping("/{id}")
    private ResponseEntity<Object> addImagesToProject(@PathVariable Long id) {
        return null;
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Object> deleteImage(@PathVariable Long id) {
        return projectImageService.deleteImage(id);
    }
}
