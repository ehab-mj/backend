import User from "../model/mongodb/users/User.js";
const UpdateUserFailedToLogin = async (user) => {
    try {
        user.FailedLoginAttempts = new Date();
        let user1 = await User.findByIdAndUpdate(user._id, {
            UserFailedToLogin: user.UserFailedToLogin,

            FailedLoginAttempts: user.FailedLoginAttempts,
        });
        return user1;
    } catch (error) {
        throw new Error("Failed to update user failed login info");
    }
};
export default UpdateUserFailedToLogin;