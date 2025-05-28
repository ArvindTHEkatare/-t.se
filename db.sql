CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE balances (
    balance_id INT PRIMARY KEY,
    user_id INT,
    balance DECIMAL(10, 2),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

