const router = require("express").Router();
const portfolioController = require("./controller");

router.post("/", portfolioController.create);
router.get("/", portfolioController.getAll);

router.put("/:id",portfolioController.update)

module.exports = router;
