import { getPosts } from "@/app/apis/getAPI";
import Link from "next/link";
import React from "react";

const PostDetailsPage = async ({ params }) => {
  const id = params.id;
  const posts = await getPosts();
  const thePost = posts.find((post) => post?.id == id);

  if (!thePost) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-gray-700">
          Post not found! 😔
        </h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto border border-gray-200">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          {thePost.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">{thePost.body}</p>
        <div className="mt-6 text-right">
          <Link
            href={`/posts`}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-all"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
