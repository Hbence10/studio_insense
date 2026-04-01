package studioInsense.StudioInsense.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import studioInsense.StudioInsense.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
