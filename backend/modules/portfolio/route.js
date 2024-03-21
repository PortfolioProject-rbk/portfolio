const router = require("express").Router();
const portfolioController = require("./controller");
const multer = require("multer");

const upload = multer();

router.post("/", upload.none(), portfolioController.create);
router.get("/", portfolioController.getAll);
router.post("/search", portfolioController.search);
// get portfolio of a user based on userId
router.get("/user/:userId", portfolioController.getUserPortfolio);

router.put("/:id", portfolioController.update);
router.delete("/:id", portfolioController.deleted);

module.exports = router;
