CREATE TABLE helo_users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE helo_posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(user_id)
);

ALTER TABLE helo_users
ALTER password 
TYPE TEXT;

INSERT INTO helo_posts (title, img, content, author_id)
VALUES
('I love to run!', 'https://images.altrarunning.com/is/image/altra/ALW1963P024-HERO?$WC-FULLIMAGE$', 'Running is great and good and cool.', 1),
('No, I love to swim!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlNIyoksewIBRpk30swd8niTuejMDL8XbuQCHnoRDBbQzmQ5APult0VWlZx3pFXXdjIiwnjHp0&usqp=CAc', 'Swimming is better than running. Sorry', 1);