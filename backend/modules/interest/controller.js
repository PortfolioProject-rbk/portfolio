const Interest = require("./model");

const getAll = async (req, res) => {
  try {
    const interests = await Interest.findAll();
    res.send(interests);
  } catch (error) {
    console.log(error);
    req.status(404).send("404");
  }
};

module.exports = { getAll };
