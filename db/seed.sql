insert into categories 
(category_name, category_description, category_img) 
values
('dummy thicc data', 
'I`m trying to code, but the clap of this card`s etc.', 'https://i.ytimg.com/vi/nr0hUIzHUxo/maxresdefault.jpg'),
('category 2', 'The boring one', 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Mr3puhu-8_7K0kZ1HrFs9Dma2FA5r1JoVQze9hYlnwAz2h46-A&s'),
('sekiro trivia only', 'no headless monkeys allowed', 'https://image.businessinsider.com/5c951ced16c958189c5c3b4c?width=1100&format=jpeg&auto=webp');

insert into decks (permanent, user_id, category_id, deck_name, deck_img)
values
(true, 2, 1, 'Medieval History', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mmHMCdgknCpcq8Ejcj-QPpMh8pPUeM00h2hs5TvVddvOn0oggg&s'),
(true, 2, 1, 'Medieval HERstory', 'https://www.historyhit.com/wp-content/uploads/2018/07/manticore-700x390.jpg'),
(false, 1, 2, 'WWII History but just the good parts', 'https://www.nationalww2museum.org/sites/default/files/styles/wide_large/public/2017-06/m4_sherman_tank.jpg');

insert into cards (question, answer)
values
('who was your mom?', 'I don`t know but I`m sure she is a nice lady'),
('where is Tavas', 'I don`t know but I hope he`s ok'),
('what is the airspeed velocity of an unladen swallow?', 'African or European?'),
('how many of these do we need?', 'Definitely a couple more');

insert into saved_decks (user_id, deck_id, card_id)
values
(2,1,1),
(2,1,2),
(2,1,3),
(2,2,1),
(2,2,2),
(1,1,1),
(1,1,2),
(1,1,3),
(3,3,1),
(3,3,3);