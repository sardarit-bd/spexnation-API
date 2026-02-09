import AppError from "../../errorHelpers/AppError.js";
import { User } from "../auth/auth.model.js";


const updateProfile = async (userId, payload) => {
    const isUserExist = await User.findById(userId);

    if (!isUserExist) {
        throw new AppError(httpStatus.NOT_FOUND, "User Not Found");
    }
    const newUserData = {};

    if (payload.name) newUserData.name = payload.name;
    if (payload.avatar) newUserData.avatar = payload.avatar;
    await User.findByIdAndUpdate(userId, newUserData);

    return true
};


const getProfile = async (userId) => {
    const user = await User.findById(userId).select("-password");

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "User Not Found");
    }

    return user;
};

const getAllUsers = async () => {
    const usersWithDocuments = await User.find().select("-password");

    if (!usersWithDocuments) {
        throw new AppError(httpStatus.NOT_FOUND, "No Users Found");
    }
    return usersWithDocuments
};
export const UserServices = {
    updateProfile,
    getProfile,
    getAllUsers
};