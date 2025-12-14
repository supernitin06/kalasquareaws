import { z } from 'zod';

export const createUserSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),

    callingNumber: z
        .string()
        .min(10, "Phone number must be at least 10 digits"),

    city: z.string().min(1, "City is required"),

    gender: z.string().min(1, "Gender is required"),

    age: z.number().min(10, "Age is less"),

    videoLink: z
        .union([z.string().url("Invalid video link URL"), z.literal("")])
        .optional()
        .transform((val) => (val === "" ? undefined : val)),

    // status is not required in create request -> default false in DB
    status: z.boolean().optional(),
});

export const validateUser = (
    req,
    res,
    next
) => {
    const result = createUserSchema.safeParse(req.body);

    if (!result.success) {
        const message = result.error.issues?.[0]?.message || "Invalid input";
        return res.status(400).json({ error: message });
    }

    // Use the transformed data (e.g., empty strings converted to undefined)
    req.body = result.data;
    next();
};
