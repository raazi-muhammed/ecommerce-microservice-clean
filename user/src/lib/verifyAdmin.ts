import axios from "axios";
import { Request, Response, NextFunction } from "express";

export async function verifyAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const data = await verifyAdminRequest(req);
        if (!data) throw new Error("Failed to verify admin");

        next();
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid token",
        });
    }
}

function verifyAdminRequest(req) {
    return axios
        .get(`${process.env.AUTH_SERVICE_URL}/api/auth/verify-admin`, {
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
