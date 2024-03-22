const SocialPlatform = require("./model");

const getAll = async (req, res) => {
  try {
    const platforms = await SocialPlatform.findAll();
    res.send(platforms);
  } catch (error) {
    console.log(error);
    req.status(404).send("404");
  }
};

module.exports = { getAll };
