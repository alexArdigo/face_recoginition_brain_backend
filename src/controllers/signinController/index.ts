import {Request, Response} from "express";
import { checkUserEmailPassword } from "../../services/checkUserEmailPasswordService";

export const signinController = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        return res.status(200).json(await checkUserEmailPassword(req));
    } catch (e) {
        return res.status(404).json('error logging in');
    }
};
