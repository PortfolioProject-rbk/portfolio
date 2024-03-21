const Portfolio = require("./model");
const { Op } = require("sequelize");

const create = async (req, res) => {
  try {
    const { email, photo, backgroundImage, profession, bio } = req.body;
    const result = await Portfolio.create({
      email: email,
      photo: photo,
      backgroundImage: backgroundImage,
      profession: profession,
      bio: bio,
    });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const result = await Portfolio.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).send(error);
  }
};

const search = async (req, res) => {
  try {
    const { email, profession, bio } = req.body;

    const searched = {};
    if (email) searched.email = { [Op.like]: `%${email}%` };
    if (profession) searched.profession = { [Op.like]: `%${profession}%` };
    if (bio) searched.bio = { [Op.like]: `%${bio}%` };

    const portfolios = await Portfolio.findAll({
      where: searched,
    });

    res.status(200).json(portfolios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, photo, backgroundImage, profession, bio } = req.body;
    const result = await Portfolio.update(
      { email, photo, backgroundImage, profession, bio },
      { where: { id: id } }
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(201).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Portfolio.destroy({ where: { id: id } });
    res.status(201).json(result);
  } catch (error) {
    res.status(404).send(error);
  }
};

const getUserPortfolio = async (req, res) => {
  try {
    // retrieve userId from url params
    const { userId } = req.params;
    // get the corresponding portfolio
    const result = await Portfolio.findOne({
      where: { userId: userId },
      include: "Interests",
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

module.exports = { create, getAll, update, deleted, search, getUserPortfolio };
