module.exports = {
  getTopics: async (req, res) => {
    const db = req.app.get("db");
    let topics = await db.get_topics();
    console.log(topics);
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
  getSavedDecks: async (req, res) => {
    const { userId } = req.params;
    const db = req.app.get("db");
    let decks = await db.get_saved_decks(+userId);
    console.log(decks);
    decks ? res.status(200).send(decks) : res.sendStatus(404);
  }
};
