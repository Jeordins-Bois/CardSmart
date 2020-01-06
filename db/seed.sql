insert into categories 
(category_name, category_description, category_img) 
values
('History', 
'Ancient and Modern', 'https://i.ytimg.com/vi/nr0hUIzHUxo/maxresdefault.jpg'),
('Chemistry', 'Sweet like C6H12O6', 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Mr3puhu-8_7K0kZ1HrFs9Dma2FA5r1JoVQze9hYlnwAz2h46-A&s'),
('Math', 'Also sweet, but like 3.1415926535...', 'https://www.incimages.com/uploaded_files/image/970x450/getty_470493341_20001333200092800_398689.jpg');

insert into decks (permanent, user_id, category_id, deck_name, deck_img)
values
(true, 2, 7, 'Medieval History', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mmHMCdgknCpcq8Ejcj-QPpMh8pPUeM00h2hs5TvVddvOn0oggg&s'),
(true, 2, 7, 'Medieval HERstory', 'https://www.historyhit.com/wp-content/uploads/2018/07/manticore-700x390.jpg'),
(true, 3, 10, 'Calculus', 'https://i.udemycdn.com/course/240x135/1233000_6ebf_4.jpg'),
(false, 1, 8, 'Bohr Model', 'https://i.pinimg.com/736x/45/d8/4e/45d84e88fed1ce1c64717b4d7ff41cce--bohr-model-simple-pictures.jpg');

insert into cards (question, answer)
values
('Question 1', 'Answer 1'),
('Question 2', 'Answer 2'),
('Question 3', 'Answer 3'),
('Question 4', 'Answer 4');

insert into saved_decks (user_id, deck_id, card_id)
values
(2,10,5),
(2,10,6),
(2,10,7),
(2,10,8),
(2,11,5),
(2,11,6),
(2,11,7),
(2,11,8),
(3,12,5),
(3,12,6),
(3,12,7),
(3,12,8),
(1,13,5),
(1,13,6),
(1,13,7),
(1,13,8),
(3,10,5),
(3,10,7),
(3,10,8);