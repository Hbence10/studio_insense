package studioInsense.StudioInsense.dto;

import studioInsense.StudioInsense.entity.Role;

public record UserDto(
        String email,
        String password,
        Role role
) {
}
