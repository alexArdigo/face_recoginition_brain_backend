// userController.js
import { checkUser } from "../../services/checkUserEmailPasswordService";

export const checkUserController = async (req, res) => {
    console.log(req.body);
    try {
        return res.status(200).json(await checkUser(req));
    } catch (e) {
        res.status(404).json('error logging in');
    }
};
