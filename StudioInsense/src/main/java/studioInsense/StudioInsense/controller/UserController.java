package studioInsense.StudioInsense.controller;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studioInsense.StudioInsense.dto.AuthDto;
import studioInsense.StudioInsense.service.UserService;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    private ResponseEntity<Object> login(@RequestBody AuthDto requestBody) {
        return userService.login(requestBody);
    }

    @PostMapping("/register")
    private ResponseEntity<Object> register(@RequestBody AuthDto requestBody) {
        return userService.register(requestBody);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Object> deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }


}
