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

    @PutMapping("/{id}")
    private ResponseEntity<Object> changeImagesOfProject(@PathVariable Long id, MultipartFile image) {
        return projectImageService.changeImageOfProject(id, image);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Object> deleteImageOfProduct(@PathVariable Long id) {
        return projectImageService.deleteImage(id);
    }

    @PostMapping("/{id}")
    private ResponseEntity<Object> addImageToProduct(@PathVariable Long id, MultipartFile image) {
        return projectImageService.addImageToProduct(id, image);
    }
}
