import { NextResponse } from "next/server";
import connectDB from "@/db/connection";
connectDB();
import UserModel from "@/models/userModel";

export async function GET(request){
    const { searchParams } = new URL(request.url)
    const job = searchParams.get('job')
    const province = searchParams.get('province')
    try {
        const user = await UserModel.find()
        if(job){
            const user = await UserModel.find({job:job})
            if(!user.length) return NextResponse.json({message:"No result"},{status:400})
            return NextResponse.json({user,message:"Success"},{status:200})
        }else if(province){
            const user = await UserModel.find({province:province})
            if(!user.length) return NextResponse.json({message:"No result"},{status:400})
            return NextResponse.json({user,message:"Success"},{status:200})
        }
        return NextResponse.json({user:user},{status:500})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}