"use client";
import { useState } from "react";
import AddNewBlog from "../add-new-blog/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
const initialBlogFormData = {
  title: "",
  description: "",
};
function BlogOverview({ blogList }) {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

  console.log(blogFormData);

  async function handleSaveBlogData() {
    try {
      setLoading(true);
      const apiResponse = await fetch("/api/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogFormData),
      });
      const result = await apiResponse.json();
      console.log(result);
      if (result?.success) {
        setLoading(false);
        setOpenBlogDialog(false);
        setBlogFormData(blogFormData);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center p-10 bg-gradient-to-r from-purple-500 to-blue-700 flex-col gap-8">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogList && blogList.length > 0
          ? blogList.map((blogItem, index) => (
              <Card key={index} className="p-5">
                <CardContent>
                  <CardTitle className="mb-5">{blogItem?.title}</CardTitle>
                  <CardDescription>{blogItem?.description}</CardDescription>
                  <div className="mt-5 flex items-center gap-6">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </div>
                </CardContent>
              </Card>
            ))
          : null}
      </div>
    </div>
  );
}

export default BlogOverview;
