import {Request} from "express";
import {DB} from "../../database";

export const checkUserEmailPassword = async (req: Request) => {
    console.log(DB)
    return DB.filter(user => req.body.email === user.email &&
        req.body.password === user.password);
}