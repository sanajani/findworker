// // import mongoose from 'mongoose'
// import { NextResponse } from 'next/server';
// import connectDB from '@/db/connection';
// import UserModel from '@/models/userModel';
// import jwt from 'jsonwebtoken';
// import bcryptjs from 'bcryptjs'
// import cookie from 'cookie'
// connectDB()

// const maxAgeOfCookie = 60 * 60 * 24 * 30;
// const TOKEN_SECRET = process.env.TOKEN_SECRET || ''

// export const POST = async (request) => {
//     try {
//         const { username, password } = await request.json();
//         // if one of the fields are empty
//         // if (!username || !password) throw new Error('Both username and password are required.'); // Custom error message
//         if (!username || !password) return NextResponse.json({message:"password and username must be present"},{status:401}) // Custom error message

//         // check there is user or not
//         const isUser = await UserModel.findOne({ username })
//         if (!isUser) return NextResponse.json({message:"user not found"},{status:401})  // Custom error message
//         console.log("Hello world login form route");


//         const isPassCorrect = await bcryptjs.compare(password, isUser.password)
//         if (!isPassCorrect) return NextResponse.json({message:"password or username not match"},{status:401})  // Custom error message
//         // console.log("is password corect ", isPassCorrect);


//         // create token data
//         const token = jwt.sign({id: isUser._id},TOKEN_SECRET, {
//             expiresIn: maxAgeOfCookie
//         })

//         const serialiezed = cookie.serialize("ourAuthToken", token,{
//             httpOnly: true,
//             maxAge: maxAgeOfCookie,
//             sameSite: 'strict',
//             path: '/'
//         })

//         const response = {
//             message: "User login Successfull"
//         }

//         return NextResponse.json(response,{
//             status: 201,
//             headers: {"Set-Cookie": serialiezed}
//         })
//         console.log(serialiezed);


//     } catch (error) {
//         return NextResponse.json({ error, success: false, msg: "Something went wrong" }, { status: 400 }); // Return custom error message
//     }
// }

// import mongoose from 'mongoose'
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/db/connection';
import UserModel from '@/models/userModel';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs'
import { getDataFromToken } from '@/helper/getDataFromToken';
connectDB()

const maxAgeOfCookie = 60 * 60 * 24 * 30;
const TOKEN_SECRET = process.env.TOKEN_SECRET || ''

export const POST = async (request) => {
    try {
        const { username, password } = await request.json();
        // if one of the fields are empty
        if (!username || !password) return NextResponse.json({message:"password and username must be present"},{status:401}) // Custom error message

        // check there is user or not
        const isUser = await UserModel.findOne({ username })
        if (!isUser) return NextResponse.json({message:"user not found"},{status:401})  // Custom error message
        console.log("Hello world login form route");


        const isPassCorrect = await bcryptjs.compare(password, isUser.password)
        if (!isPassCorrect) return NextResponse.json({message:"password or username not match"},{status:401})  // Custom error message
        // console.log("is password corect ", isPassCorrect);


        // create token data
        const token = jwt.sign({id: isUser._id},TOKEN_SECRET, {
            expiresIn: maxAgeOfCookie
        })

        // const serialiezed = cookie.serialize("ourAuthToken", token,{
        //     httpOnly: true,
        //     maxAge: maxAgeOfCookie,
        //     sameSite: 'strict',
        //     path: '/'
        // })

        const response = NextResponse.json({
            message:'Login successful',
            success:true
        })
        response.cookies.set('ourauthtoken',token,{
            httpOnly: true,
            maxAge: maxAgeOfCookie
        })

        return response

    } catch (error) {
        return NextResponse.json({ error, success: false, msg: "Something went wrong" }, { status: 400 }); // Return custom error message
    }
}

export const GET = async (NextRequest) => {
   try {
    const userID = await getDataFromToken(NextRequest)
    const user = await UserModel.findOne({_id: userID})
    return NextResponse.json({success: true, user})
   } catch (error) {
    console.log('login route get method error');   
    throw new Error(error.message)
   }
}