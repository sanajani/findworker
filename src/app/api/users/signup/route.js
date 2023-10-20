import { NextResponse } from "next/server";
import UserModel from "@/models/userModel";
import connectDB from "@/db/connection";
import bcryptjs from 'bcryptjs';
// signuproute

export const POST = async (request) => {
    connectDB()

    const {name,lastName, username,password, job, experiance, firstPhoneNumber,secondNumber, profile, province, aboutuser} = await request.json();

    // if missed field then send an error experiance
    if (!name || !lastName || !username || !password || !job || !experiance || !firstPhoneNumber || !secondNumber || !profile || !province || !aboutuser) return NextResponse.json({message: "لطفا خانه های خالی را پور کنید"},{status: 401})

    try {
    // hash the password
    const hashPassword = await bcryptjs.hash(password, 12)
    
    // else save data
    const newUser = new UserModel({
        name,
        lastName,
        username,
        password: hashPassword,
        job,
        experiance,
        phoneNumber1: firstPhoneNumber,
        phoneNumber2: secondNumber,
        profileImage: profile,
        province,
        personalInfo: aboutuser
    })
    await newUser.save();
    return NextResponse.json({message: "User successfully inseted", user: newUser}, {status: 201})

    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong", error: error}, {status: 500})
    }
}