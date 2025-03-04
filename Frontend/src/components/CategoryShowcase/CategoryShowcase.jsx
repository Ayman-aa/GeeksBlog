import { Code, Terminal, ChevronRight, Github, Twitter, Linkedin } from "lucide-react";
import React from "react";

function CategoryShowcase()
{
    return(
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 font-semibold tracking-wide uppercase">
              Explore
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Popular Categories</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl transition-all duration-300 group-hover:from-orange-100 group-hover:to-pink-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:rotate-1">
                <Terminal className="h-8 w-8 text-orange-500 group-hover:text-pink-500 transition-colors duration-300" />
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-300">Programming</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl transition-all duration-300 group-hover:from-pink-100 group-hover:to-purple-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:-rotate-1">
                <Code className="h-8 w-8 text-pink-500 group-hover:text-purple-500 transition-colors duration-300" />
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Web Dev</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl transition-all duration-300 group-hover:from-purple-100 group-hover:to-indigo-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:rotate-1">
                <svg
                  className="h-8 w-8 text-purple-500 group-hover:text-indigo-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Blockchain</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl transition-all duration-300 group-hover:from-indigo-100 group-hover:to-blue-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:-rotate-1">
                <svg
                  className="h-8 w-8 text-indigo-500 group-hover:text-blue-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.23.16.53.38.73.24.19.54.29.88.29h1.22c.68 0 1.22-.55 1.22-1.22 0-3.54 3.14-6.4 6.96-6.4 3.82 0 6.96 2.87 6.96 6.4 0 3.54-3.14 6.4-6.96 6.4-.46 0-.92-.05-1.36-.14-.6-.13-1.2.18-1.38.77l-.33 1.36c-.14.58.14 1.17.7 1.37.71.25 1.48.38 2.25.38 4.74 0 9-3.65 9-9.28v-1.22z" />
                </svg>
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Crypto</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl transition-all duration-300 group-hover:from-blue-100 group-hover:to-cyan-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:rotate-1">
                <svg
                  className="h-8 w-8 text-blue-500 group-hover:text-cyan-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  <path d="M22 7l-10 5-10-5" />
                </svg>
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">NFTs</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl transition-all duration-300 group-hover:from-cyan-100 group-hover:to-teal-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:-rotate-1">
                <svg
                  className="h-8 w-8 text-cyan-500 group-hover:text-teal-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors duration-300">DeFi</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
}
export default CategoryShowcase;