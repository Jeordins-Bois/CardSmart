select d.category_id, d.deck_name, d.deck_img, d.deck_id, u.user_id,u.username from decks d 
JOIN users u
ON u.user_id = d.user_id;