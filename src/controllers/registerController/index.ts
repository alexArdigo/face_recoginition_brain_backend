import {Request, Response} from "express";
import { checkUserEmailService } from "../../services/checkUserEmailService";


export const registerController = async (req: Request, res: Response) => {
    try {
        if (await checkUserEmailService(req) === undefined){
            return res.status(404).json('error: user already exists');
        }
        return res.status(200).json(await checkUserEmailService(req))
    } catch (e) {
        return res.status(404).json('error');
    }

}
