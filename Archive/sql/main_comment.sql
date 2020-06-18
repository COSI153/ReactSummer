create table comment
(
    comment_id  INTEGER
        constraint comment_pk
            primary key autoincrement,
    cproduct_id INTEGER
        references product,
    cuser_id    INTEGER
        references user,
    time        DATETIME
);

