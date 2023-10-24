import { NextResponse } from "next/server";
import connectDB from "@/db/connection";
import UserModel from "@/models/userModel";

export async function GET(request){
    connectDB();

    // console.log('this is request query',request.query)
    const { searchParams } = new URL(request.url)
    // console.log(searchParams);
    // console.log('this is your search params',searchParams);
    const job = searchParams.get('job')
    const province = searchParams.get('province')
    try {  
        if(province && job){
            const user = await UserModel.find({$and: [{job:job},{province:province}]})
            if(!user.length) return NextResponse.json({message:"No result"},{status:400})
            return NextResponse.json({user,message:"Success"},{status:200})
        }
        const user = await UserModel.find({$or: [{job:job},{province:province}]})
        if(!user.length) return NextResponse.json({message:"No result"},{status:400})

        // if(!user.length) return NextResponse.json({message:"No result"},{status:400})
        return NextResponse.json({user,message:"Success"},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}