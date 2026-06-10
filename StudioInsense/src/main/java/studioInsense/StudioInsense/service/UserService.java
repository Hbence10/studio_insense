package studioInsense.StudioInsense.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import studioInsense.StudioInsense.dto.AuthDto;
import studioInsense.StudioInsense.entity.Users;
import studioInsense.StudioInsense.exception.NotFoundException;
import studioInsense.StudioInsense.repository.UserRepository;

import java.time.LocalDateTime;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public ResponseEntity<Object> login(AuthDto givenAuthentication) {
        Users searchedUser = userRepository.findByEmailAndIsDeleted(givenAuthentication.email(), false).orElseThrow(() -> new NotFoundException("userNotFound"));
//        if (passwordEncoder.matches(searchedUser.getPassword(), givenAuthentication.password())) {
//            throw new NotFoundException("userNotFound");
//        }
        return ResponseEntity.ok().body(searchedUser);
    }

    public ResponseEntity<Object> deleteUser(Long id) {
        Users searchedUser = userRepository.findByIdAndIsDeleted(id, false).orElseThrow(() -> new NotFoundException("userNotFound"));
        searchedUser.setDeletedAt(LocalDateTime.now());
        searchedUser.setIsDeleted(true);
        userRepository.save(searchedUser);
        return ResponseEntity.ok().build();
    }
}
