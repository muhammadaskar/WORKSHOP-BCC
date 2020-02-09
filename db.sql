CREATE TABLE `post`(
    id integer primary key auto_increment,
    id_user integer references user(id),
    content varchar(255),
    createdAt timestamp default CURRENT_TIMESTAMP,
    updateAt timestamp default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
)