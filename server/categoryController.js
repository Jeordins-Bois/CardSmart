module.exports = {
  getCategories: async (req, res) => {
    const db = req.app.get("db");
    let categories = await db.get_categories();
    // console.log(categories);
    res.status(200).send(categories);
  },
  getCategory: (req, res) => {
    const { name } = req.params;
    console.log(name);
    name ? (req.session.category = name) : null;
    
    res.status(200).send(req.session.category);
  },
  getTopics: async (req, res) => {
    const db = req.app.get("db");
    let topics = await db.get_topics();
    res.status(200).send(topics);
  },
  getTopic: (req, res) => {
    const { name } = req.params;
    name ? (req.session.topic = name) : null;
    res.status(200).send(req.session.topic);
  }
};
