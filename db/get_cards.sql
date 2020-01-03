-- gets all cards of the deck with the original creator for display on the finding new decks page
SELECT * FROM cards c 
JOIN saved_decks sd ON sd.card_id = c.card_id 
JOIN decks d ON d.deck_id = sd.deck_id
WHERE sd.deck_id = $1 AND d.user_id = sd.user_id;