package studioInsense.StudioInsense.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import studioInsense.StudioInsense.entity.Users;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Long> {

    Optional<Users> findByEmailAndIsDeleted(String email, Boolean isDeleted);
    Optional<Users> findByIdAndIsDeleted(Long id, Boolean isDeleted);
}
