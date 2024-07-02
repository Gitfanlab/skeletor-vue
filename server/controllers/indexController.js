const indexModel = require("../models/indexModel");

module.exports = async (req, res) => {
  try {
    const messages = await indexModel.getMessages();
    res.json(messages);
  } catch (error) {
    console.error("Error in getMessages controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
