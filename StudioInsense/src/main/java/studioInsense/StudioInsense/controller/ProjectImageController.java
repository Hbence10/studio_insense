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


}
