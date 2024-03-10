import express, {Request, Response} from "express";
import {DB} from "../../database";

const router = express.Router();
router.get("/", (req: Request, res: Response) => {
    res.send(DB);
});

module.exports = router;