package studioInsense.StudioInsense.entity;

import java.time.LocalDateTime;

public class Users {
    private Long id;
    private String email;
    private String password;
    private LocalDateTime createdAt;
    private LocalDateTime lastLogin;
    private Boolean isDeleted;
    private LocalDateTime deletedAt;

    private Role role;
}
