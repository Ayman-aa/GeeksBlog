import React, { useEffect, useState } from "react";
import { ArrowLeft, Tag, ThumbsUp } from "lucide-react";
import { NavLink, useParams } from "react-router";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPostById() {
      try {
        const response = await fetch(`https://the4codeblogbackend.onrender.com/api/post/${id}`);

        // Check if the response is in JSON format
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid response format");
        }

        const data = await response.json();
        setPost(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    }

    getPostById();
  }, [id]);

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Error</h2>
          <p className="mt-2 text-gray-600">{error}</p>
          <NavLink to="/" className="mt-4 inline-flex items-center text-orange-600 hover:text-orange-500">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to home
          </NavLink>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Post not found</h2>
          <p className="mt-2 text-gray-600">The post you're looking for doesn't exist or has been removed.</p>
          <NavLink to="/" className="mt-4 inline-flex items-center text-orange-600 hover:text-orange-500">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to home
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <NavLink to="/" className="inline-flex items-center text-orange-600 hover:text-orange-500 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to articles
        </NavLink>

        {/* Article header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6">
            <div className="flex items-center mr-6 mb-2">
              <Tag className="h-4 w-4 mr-1" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-8">
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
        </div>

        {/* Article content */}
        <div className="prose prose-orange max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.description }} />
      </div>
    </div>
  );
};

export default PostDetails;
