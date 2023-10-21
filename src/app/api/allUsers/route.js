import UserModel from "@/models/userModel";
import { NextResponse } from "next/server";
import connectDB from "@/db/connection";
connectDB()
// get all users
export const GET = async () => {
    try {
        // const userID = await UserModel.countDocuments()
        const user = await UserModel.find();
        // console.log(user);
        return NextResponse.json({message: "Success", success: true, user}, {status: 200, statusText: 'ok'})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong", error: error.message},{status:500, statusText:'failed to get users'})
    }
}

