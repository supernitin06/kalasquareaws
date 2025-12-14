import { createUser } from "./user.service.js";

export const createUserController = async (req, res) => {
    try {
        const data = req.body;
        const user = await createUser(data
        );

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        console.error("Create user error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create user",
            error: error.message
        });
    }
};
