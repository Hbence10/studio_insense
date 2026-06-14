package studioInsense.StudioInsense.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record AuthDto(

        @Email
        @NotNull
        @NotEmpty
        String email,

        @NotNull
        @NotEmpty
        String password
) {
}
