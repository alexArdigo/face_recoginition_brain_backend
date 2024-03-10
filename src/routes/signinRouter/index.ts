import express from "express";
import { signinController } from "../../controllers/signinController";

const router = express.Router();

router.post("/", signinController);

module.exports = router