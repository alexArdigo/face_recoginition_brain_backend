import express from "express";
import {imageController} from "../../controllers/imageController";

const router = express.Router();

router.put("/", imageController)

module.exports = router