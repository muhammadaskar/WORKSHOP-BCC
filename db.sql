CREATE TABLE `posts`(
    id integer primary key auto_increment,
    id_user integer references users(id),
    content varchar(255),
    createdAt timestamp default CURRENT_TIMESTAMP,
    updateAt timestamp default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
) CREATE TABLE `likes` (
    id_post integer references posts(id),
    id_user integer references users(id)
) CREATE TABLE `comments`(
    id integer primary key auto_increment,
    id_user integer references users(id),
    id_post integer references posts(id),
    content varchar(255)
)