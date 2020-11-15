CREATE DATABASE inventorymanagement;

CREATE TABLE items(
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255)
)