import {Request} from "express";
import {DB} from "../../database";

export const checkUserEmailService = async (req: Request) => {
    const {name, email, password} = req.body

    const checkEmail = DB.some(user => req.body.email !== user.email)
    if (checkEmail) {
        DB.push({
            id: 123,
            name: name,
            email: email,
            password: password,
            entries: 0,
            joined: new Date(),
        });
    }

    return !checkEmail ? DB[DB.length-1] : undefined
}