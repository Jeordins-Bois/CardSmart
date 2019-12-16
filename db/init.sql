create table users (
user_id serial primary key,
profile_img varchar(300),
email varchar(30),
username varchar(15),
auth0_id varchar(100)
);

create table categories (
    category_id serial primary key,
    category_name varchar(100),
    category_description varchar(250),
    category_img varchar(250)
);

create table decks (
    deck_id serial primary key,
    permanent boolean,
    user_id int references users(user_id),
    category_id int references categories(category_id),
    deck_name varchar(100),
    deck_img varchar(250)
);

create table cards (
    card_id serial primary key,
    question varchar(250),
    answer varchar(250),
    card_img varchar(250)
);

create table saved_decks (
    saved_deck_id serial primary key,
    user_id int references users(user_id),
    deck_id int references decks(deck_id),
    card_id int references cards(card_id)
);