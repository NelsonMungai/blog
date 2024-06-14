import connectToDB from "@/database";
import Blog from "@/model/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const extractAllBlogFromDB = await Blog.find({});
    if (extractAllBlogFromDB) {
      return NextResponse.json({
        success: true,
        data: extractAllBlogFromDB,
      });
    } else {
      return NextResponse.json({
        succes: false,
        message: "Something went wrong with GET()! Please try again",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      succes: false,
      message: "Something went wrong with GET()! Please try again",
    });
  }
}
