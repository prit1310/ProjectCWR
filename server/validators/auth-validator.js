const { z } = require('zod');

const signUpSchema = z.object({
    name: z.string({ required_error: "Name is required" })
        .trim().min(3, { message: "Name must be at least 3 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),
    
    email: z.string({ required_error: "Email is required" })
        .trim().email({ message: "Invalid email" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    
    phone: z.string({ required_error: "Phone is required" })
        .trim().min(10, { message: "Phone must be at least 10 characters" })
        .max(20, { message: "Phone must not be more than 20 characters" }),
    
    password: z.string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(1024, { message: "Password can't be greater than 1024 characters" }),
    
    district: z.string({ required_error: "District is required" })
        .trim().min(3, { message: "District must be at least 3 characters" })
        .max(255, { message: "District must not be more than 255 characters" }),
    
    state: z.string({ required_error: "State is required" })
        .trim().min(3, { message: "State must be at least 3 characters" })
        .max(255, { message: "State must not be more than 255 characters" }),
});

const loginSchema = z.object({
    email: z.string({ required_error: "Email is required" })
        .trim().email({ message: "Invalid email" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    
    password: z.string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least 7 characters" })
        .max(1024, { message: "Password can't be greater than 1024 characters" }),
});

const bankDetailsSchema = z.object({
    bankName: z.string({ required_error: "Bank Name is required" })
        .trim().min(3, { message: "Bank Name must be at least 3 characters" })
        .max(255, { message: "Bank Name must not be more than 255 characters" }),
    
    accountHolder: z.string({ required_error: "Account Holder Name is required" })
        .trim().min(3, { message: "Account Holder Name must be at least 3 characters" })
        .max(255, { message: "Account Holder Name must not be more than 255 characters" }),
    
    accountNumber: z.string({ required_error: "Account Number is required" })
        .trim().regex(/^[0-9]{6,18}$/, { message: "Account Number must be 6 to 18 digits" }),
    
    ifscCode: z.string({ required_error: "IFSC Code is required" })
        .trim().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, { message: "Invalid IFSC Code format" }),
    
    upiId: z.string().trim().regex(
            /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/, 
            { message: "Invalid UPI ID format" }
        ).optional(),
});

const contactUs = z.object({
    email: z.string({ required_error: "Email is required" })
        .trim().email({ message: "Invalid email" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    name: z.string({ required_error: "Name is required" })
        .trim().min(3, { message: "Name must be at least 3 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),
    message: z.string({ required_error: "Message is required" })
        .trim().min(3, { message: "Message must be at least 3 characters" })
        .max(255, { message: "Message must not be more than 255 characters" }),
});

module.exports = { signUpSchema, loginSchema, bankDetailsSchema, contactUs};
