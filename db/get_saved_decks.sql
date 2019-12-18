SELECT DISTINCT d.deck_name, d.deck_id FROM saved_decks sd 
JOIN decks d 
ON d.deck_id = sd.deck_id 
WHERE sd.user_id = $1;