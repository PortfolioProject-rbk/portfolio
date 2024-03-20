const router = require("express").Router();
const portfolioController = require("./controller");

router.post("/", portfolioController.create);
router.get("/", portfolioController.getAll);
router.post("/search",portfolioController.search)
module.exports = router;
