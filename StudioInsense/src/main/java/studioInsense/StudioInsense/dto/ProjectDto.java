package studioInsense.StudioInsense.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record ProjectDto(
        @NotNull
        @NotEmpty
        String titleHu,

        @NotNull
        @NotEmpty
        String descriptionHu,

        @NotNull
        @NotEmpty
        String titleEng,

        @NotNull
        @NotEmpty
        String descriptionEng,

        @NotNull
        @NotEmpty
        String cardTitleHu,

        @NotNull
        @NotEmpty
        String cardTitleEng
) {
}
