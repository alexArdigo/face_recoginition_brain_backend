import {Request} from "express";
import {DB} from "../../database";

export const addUserEntriesService = async (req: Request) => {
    const { id } = req.body;
    const checkID = DB.find(user => user.id === id)
    if (!checkID){
        return undefined
    }
    checkID.entries++
    return checkID.entries
}