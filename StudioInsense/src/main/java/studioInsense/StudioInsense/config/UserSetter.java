package studioInsense.StudioInsense.config;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import studioInsense.StudioInsense.entity.Users;
import studioInsense.StudioInsense.exception.NotFoundException;
import studioInsense.StudioInsense.repository.UserRepository;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserSetter implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users loggedUser = userRepository.findByEmail(email).orElseThrow(() -> new NotFoundException("userNotFound"));
        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority(loggedUser.getRole().getName()));
        return new User(loggedUser.getEmail(), loggedUser.getPassword(), authorities);
    }
}

