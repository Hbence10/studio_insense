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

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public ResponseEntity<Object> login(AuthDto givenAuthentication) {
        Users searchedUser = userRepository.findByEmailAndIsDeleted(givenAuthentication.email(), false).orElseThrow(() -> new NotFoundException("userNotFound"));
        if (passwordEncoder.matches(searchedUser.getPassword(), givenAuthentication.password())) {
            throw new NotFoundException("userNotFound");
        }
        return ResponseEntity.ok().body(searchedUser);
    }

    public ResponseEntity<Object> register(AuthDto newUserData) {
        String encodedPassword = passwordEncoder.encode(newUserData.password());
        Users newUser = new Users(newUserData.email(), encodedPassword);
        userRepository.save(newUser);
        return ResponseEntity.ok().build();
    }
}
