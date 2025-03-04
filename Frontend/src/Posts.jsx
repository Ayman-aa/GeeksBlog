import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";

function Posts() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navbar />
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:text-center">
            <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 font-semibold tracking-wide uppercase">
              Our Articles
            </h2>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Posts;
