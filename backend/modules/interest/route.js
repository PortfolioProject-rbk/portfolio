const router = require("express").Router();
const InterestController = require("./controller");

router.get("/", InterestController.getAll);

module.exports = router;
