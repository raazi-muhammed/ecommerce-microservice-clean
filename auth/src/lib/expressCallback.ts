import { Request, Response } from "express";
import adaptRequest from "./adaptRequest.js";

export default function makeCallback(controller: Function) {
    return async (req: Request, res: Response) => {
        const httpRequest = adaptRequest(req);
        try {
            const data = await controller(httpRequest);
            if (data) {
                res.status(200).json({
                    success: true,
                    message: "User Logged in",
                    data,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: "User Logged in",
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message || "Internal server error",
            });
        }
    };
}
