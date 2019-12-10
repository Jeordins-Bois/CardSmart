create table users (
user_id serial primary key,
profile_img varchar(300),
email varchar(30),
username varchar(15),
auth0_id varchar(100)
)