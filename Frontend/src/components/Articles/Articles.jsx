import React, { useEffect, useState } from "react";
import Article from "../Article/Article";
import { articles } from "../../db";
import { NavLink } from "react-router";

function Articles() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://the4codeblogbackend.onrender.com/api/posts");
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 font-semibold tracking-wide uppercase">
            Featured Articles
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Explore Our Latest Content</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Dive into our most popular and recent articles covering everything from blockchain to web development.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((article) => (
            <Article
              postId={article.id}
              img={article.imageUrl}
              title={article.title}
              desc={article.description}
              cat={article.category}
              key={article.id}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <NavLink
            to="/posts"
            className={`inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1`}
          >
            Load More Articles
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Articles;
