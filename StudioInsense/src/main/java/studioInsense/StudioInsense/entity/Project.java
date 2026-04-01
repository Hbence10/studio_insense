package studioInsense.StudioInsense.entity;

import java.time.LocalDateTime;
import java.util.List;

public class Project {

    private Long id;
    private String title;
    private String description;
    private LocalDateTime createdAt;
    private Boolean isDeleted;
    private LocalDateTime deletedAt;

    private List<ProjectImage> images;
}
