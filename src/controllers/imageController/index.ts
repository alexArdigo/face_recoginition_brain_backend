import {Request, Response} from "express";
import {addUserEntriesService} from "../../services/addUserEntriesService";

export const imageController = async (req: Request, res: Response) => {

    try {
        const service = await addUserEntriesService(req)
        if (!service){
            return Promise.reject(Error("user id not found"));
        }
        return res.status(200).json(service)
    } catch (e) {
        return res.status(404).json('Id not found');
    }
}

