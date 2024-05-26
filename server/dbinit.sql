CREATE TABLE users (
    user_id UUID NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE products {
    -- seller_id UUID NOT NULL,
    -- product_id UUID NOT NULL PRIMARY KEY,
    desc_text TEXT NOT NULL,
    img_src TEXT NOT NULL,
    title TEXT NOT NULL,
    -- FOREIGN KEY (seller_id) REFERENCES users (user_id)
}

CREATE TABLE receipts {
    buyer_id NOT NULL
    product_id NOT NULL
    PRIMARY KEY (user_id, product_id)
    FOREIGN KEY buyer_id REFERENCES user_id
    FOREIGN KEY product_id REFERENCES product_id
}