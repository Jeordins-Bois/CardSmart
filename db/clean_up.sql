DELETE FROM cards
WHERE card_id NOT IN (SELECT card_id FROM saved_decks);

DELETE FROM decks
WHERE deck_id NOT IN (SELECT deck_id FROM saved_decks);