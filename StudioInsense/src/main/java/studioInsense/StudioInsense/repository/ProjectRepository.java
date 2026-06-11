package studioInsense.StudioInsense.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import studioInsense.StudioInsense.entity.Project;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    List<Project> findByIsDeleted(Boolean isDeleted);
    Optional<Project> findByIdAndIsDeleted(Long id, Boolean isDeleted);
}
