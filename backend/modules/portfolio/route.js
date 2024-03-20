const router = require("express").Router();
const portfolioController = require("./controller");

router.post("/", portfolioController.create);
router.get("/", portfolioController.getAll);

module.exports = router;
