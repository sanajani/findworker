import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is Required"],
    },
    lastName: {
        type: String,
        required: [true, "LastName is Required"],
    },
    username: {
        type: String,
        required: [true, "User Name is Required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password is Required"],
    },
    job:{
        type: String,
        required: [true, "Job is Required"],
    },
    experiance: {
        type: String,
    },
    phoneNumber1: {
        type: String,
        required: [true, "PhoneNumber1 is Required"],
        unique: true
    },
    phoneNumber2: {
        type: String,
        required: [true, "PhoneNumber2 is Required"],
        unique: true
    },
    profileImage: {
        type: String,
    },
    province: {
        type: String,
        required: [true, "Province is Required"],
    },
    personalInfo:{
        type: String,
        required: [true, "PersonalInformation is Required"],
    }
})

const UserModel = mongoose.models.users || mongoose.model('users', userSchema);

// const UserModel = mongoose.model.users || mongoose.model("users", userSchema)

export default UserModel
