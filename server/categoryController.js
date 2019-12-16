module.exports = {
  getCategories: async (req, res) => {
    const db = req.app.get("db");
    let categories = await db.get_categories();
    // console.log(categories);
    res.status(200).send(categories);
  }
};
