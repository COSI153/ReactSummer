create table product
(
    product_id   INTEGER
        constraint product_pk
            primary key autoincrement,
    product_name VARCHAR(50),
    seller_id    INTEGER
        references user,
    pic_address  VARCHAR(200),
    description  TEXT,
    upload_time  DATETIME
);

