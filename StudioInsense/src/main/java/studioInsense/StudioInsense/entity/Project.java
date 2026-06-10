package studioInsense.StudioInsense.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import jakarta.validation.constraints.Size;
import jdk.jfr.BooleanFlag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "project")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Size(max = 100)
    @NotNull
    @NotEmpty
    @Column(name = "title_hu")
    private String titleHu;

    @NotNull
    @NotEmpty
    @Column(name = "description_hu")
    private String descriptionHu;

    @Size(max = 100)
    @NotNull
    @NotEmpty
    @Column(name = "title_eng")
    private String titleEng;

    @NotNull
    @NotEmpty
    @Column(name = "description_eng")
    private String descriptionEng;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "is_deleted")
    private Boolean isDeleted;

    @Null
    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;

    @OneToMany(mappedBy = "project")
    private List<ProjectImage> images;
}
