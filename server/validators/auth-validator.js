const {z} = require('zod')

const signUpSchema = z.object({
    name:z.string({
        required_error:"name is required"
    }).trim().min(3,{
        message:"name must be at least 3 characters"
    }).max(255,{
        message:"name must not be more than 255 characters"
    }),
    email:z.string({
        required_error:"Email is required"
    }).trim().email({message:"invalid email"}).
    min(3,{message:"email must be at least 3 characters"}).
    max(255,{message:"email must not be more than 255 characters"
    }),
    phone:z.string({
        required_error:"Phone is required"
    }).trim().min(10,{message:"phone must be at least 10 characters"}).max(20,{
        message:"phone must not be more than 20 characters"
    }),
    password:z.string({
        required_error:"password is required"
    }).min(6,{
        message:"password must be at least 6 characters"
    }).max(1024,{
        message:"password can't be greater than 1024 characters"
    }),
    district:z.string({
        required_error:"District is required"
    }).trim().min(3,{
        message:"District must be at least 3 characters"
    }).max(255,{
        message:"District must not be more than 255 characters"
    }),
    state:z.string({
        required_error:"State is required"
    }).trim().min(3,{
        message:"State must be at least 3 characters"
    }).max(255,{
        message:"State must not be more than 255 characters"
    })
})

const loginSchema = z.object({
    email:z.string({
        required_error:"Email is required"
    }).trim().email({message:"invalid email"}).
    min(3,{message:"email must be at least 3 characters"}).
    max(255,{message:"email must not be more than 255 characters"
    }),
    password:z.string({
        required_error:"password is required"
    }).min(7,{
        message:"password must be at least 6 characters"
    }).max(1024,{
        message:"password can't be greater than 1024 characters"
    })
})

module.exports = {signUpSchema,loginSchema}