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
    const { query, city } = req.body;

    let whereCondition = {}

    if (query) {
      whereCondition = {
        // the result should match any of the conditions inside the array
        [Op.or]: [
          {fullName:{[Op.like]:`%${query}%`}},
          { email: { [Op.like]: `%${query}%` } },
          { profession: { [Op.like]: `%${query}%` } },
          { bio: { [Op.like]: `%${query}%` } }
        ]
      };
    }

    if (city) {
      whereCondition.city = city
    }
    if (!query && !city) {
      return res.status(400).json({ message: "No search query or city provided" })
    }

    const portfolios = await Portfolio.findAll({
      where: whereCondition,
    })

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
