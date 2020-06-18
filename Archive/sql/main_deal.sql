create table deal
(
    deal_id     INTEGER
        constraint deal_pk
            primary key autoincrement,
    tproduct_id INTEGER
        references product,
    quantity    INTEGER,
    buyer_id    INTEGER
        references user,
    seller_id   INTEGER
        references user,
    time        DATETIME
);

