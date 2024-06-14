// POST api route

import connectToDB from "@/database";
import Blog from "@/model/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const AdddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});
export async function POST(req) {
  try {
    await connectToDB();

    const extractBlogData = await req.json();
    const { title, description } = extractBlogData;

    const { error } = AdddNewBlog.validate({ title, description });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }
    const newlyCreatedBlogItem = await Blog.create(extractBlogData);
    if (newlyCreatedBlogItem) {
      return NextResponse.json({
        success: true,
        message: "Blog added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "something went wrong in add-blog route Mess",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong in add-blog route",
    });
  }
}
