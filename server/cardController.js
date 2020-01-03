module.exports = {
  // axios request to get only cards in deck of original creator
  getOriginalCards: async (req, res) => {
    const { deckId } = req.params;
    const db = req.app.get("db");
    let cards = await db.get_cards(+deckId);
    res.status(200).send(cards);
  }
};
