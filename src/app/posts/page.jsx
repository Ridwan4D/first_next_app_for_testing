import React from "react";
import { getPosts } from "../apis/getAPI";
import Link from "next/link";

const PostPage = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Post Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
        {posts?.slice(0, 11)?.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 p-4 rounded shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2">
              {post.title.slice(0, 10)}
            </h2>
            <p className="text-gray-700">{post.body.slice(0, 30)}...</p>
            <div className="mt-5">
              <Link
                href={`/posts/${post?.id}`}
                className="py-2 px-4 bg-cyan-500 text-white rounded-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
