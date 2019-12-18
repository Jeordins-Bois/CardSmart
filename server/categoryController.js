module.exports = {
  getCategories: async (req, res) => {
    const db = req.app.get("db");
    let categories = await db.get_categories();
    // console.log(categories);
    res.status(200).send(categories);
  },
  getCategory: (req, res) => {
    req.session.category
      ? res.status(200).send(req.session.category)
      : res.sendStatus(404);
  },
  setCategory: (req, res) => {
    const { name } = req.params;
    req.session.category = name;
    res.status(200).send(req.session.category);
  },
  getTopics: async (req, res) => {
    const db = req.app.get("db");
    let topics = await db.get_topics();
    res.status(200).send(topics);
  },
  getTopic: (req, res) => {
    req.session.topic
      ? res.status(200).send(req.session.topic)
      : res.sendStatus(404);
  },
  setTopic: (req, res) => {
    const { name } = req.params;
    req.session.topic = name;
    res.status(200).send(req.session.topic);
  },
  // axios request to get only cards in deck of original creatorlogg
  getOriginalCards: async (req, res) => {
    const { deckId } = req.params;
    const db = req.app.get("db");
    let cards = await db.get_cards(+deckId);
    res.status(200).send(cards);
  }
};
