import { model, Schema } from "mongoose";

export const Role = {
    ADMIN: 'admin',
    SUPER_ADMIN: 'super_admin'
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: Role.TENANT
    },
    verified: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false
})




export const User = model("User", userSchema)

