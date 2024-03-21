const Portfolio = require("./model");
const { Op } = require("sequelize");

const create = async (req, res) => {
  try {
    const { fullName, email, profession, photo, bio, city, backgroundImage } =
      req.body;
    const result = await Portfolio.create({
      fullName: fullName,
      email: email,
      profession: profession,
      bio: bio,
      city: city,
      photo: photo,
      backgroundImage: backgroundImage,
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

module.exports = { create, getAll, update, deleted, search };
