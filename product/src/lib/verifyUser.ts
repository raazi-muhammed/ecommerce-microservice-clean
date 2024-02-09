import axios from "axios";
import { Request, Response, NextFunction } from "express";

declare global {
    namespace Express {
        interface Request {
            currentUser?: { _id: string };
        }
    }
}

export async function verifyUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const data = await verifyUserRequest(req);
        if (!data) throw new Error("Failed to verify user");
        console.log({ data });

        req.currentUser = data;

        next();
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid token",
        });
    }
}

function verifyUserRequest(req) {
    return axios
        .get("http://auth:4000/api/auth/current-user", {
            headers: {
                Authorization: req.headers.authorization,
            },
        })
        .then((response) => {
            return response.data.data;
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}
