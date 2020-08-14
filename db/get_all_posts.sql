SELECT u.username, p.title, p.img, p.content FROM 
helo_users u JOIN helo_posts p 
ON u.user_id = p.author_id; 