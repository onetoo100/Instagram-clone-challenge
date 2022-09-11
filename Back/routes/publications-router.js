const { Router } = require("express");
const multer = require("multer");
const multerConfig = require("../config/multer");
const {
  getPublication,
  postPublication,
  putPublication,
} = require("../controllers/publications-controller");

const router = Router();

router.get("/", getPublication);
router.post("/", multer(multerConfig).single("file"), postPublication);
router.put("/:id", putPublication);

module.exports = router;
