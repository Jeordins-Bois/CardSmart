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
  }
};
