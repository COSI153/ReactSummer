create table user
(
    user_id  INTEGER
        constraint user_pk
            primary key autoincrement,
    email    VARCHAR(50),
    password VARCHAR(20),
    salt     VARCHAR(50),
    role     TINYINT(1) default 0 not null
);

create unique index user_email_uindex
    on user (email);

