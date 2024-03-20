const Portfolio = require("./model");

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

module.exports = { create, getAll ,update};
