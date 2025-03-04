import React from "react";

export default function Newsletter(){
    return (
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl my-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
            Subscribe to our newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-orange-100">
            Get the latest articles and insights delivered straight to your inbox. No spam, just valuable content.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only text-white">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-700 focus:ring-white focus:border-white sm:max-w-xs rounded-full"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-orange-600 bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-700 focus:ring-white transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-orange-200">
            We care about your data. Read our{" "}
            <a href="#" className="text-white font-medium underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>

    )
};