import bcrypt from "bcrypt";
import prisma from "../config/db.config.js";

class AuthController {
    static async register(req, res) {
        try {
            const payload = req.body;
            const salt = bcrypt.genSaltSync(10);
            payload.password = bcrypt.hashSync(payload.password, salt);

            const user = await prisma.user.create({
                data: payload,
            });


            return res.json({ message: "Account created successfully", user });
        } catch (error) {
            return res.json.status(500).json({message:"Something went wrong"});
        }
    }
}

export default AuthController;