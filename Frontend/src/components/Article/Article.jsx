import { ChevronRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

function Article(props) {
  return (
    <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:rotate-1">
      <div className="relative h-48 w-full overflow-hidden">
        <img className="w-full h-full object-cover" src={props.img} alt="Cryptocurrency coins" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{props.title}</h3>
        <p className="text-gray-600 mb-4">{props.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800">
            {props.cat}
          </span>
        </div>
        <div className="flex items-center justify-between">
          {/* <div className="flex items-center">
                <span className="text-sm text-gray-500">Hosted by: {props.host}</span>
              </div> */}
          <NavLink to={`/post/${props.postId}`} className="text-orange-600 hover:text-pink-500 flex items-center transition-colors duration-300">
            Read more <ChevronRight className="h-4 w-4 ml-1" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Article;
