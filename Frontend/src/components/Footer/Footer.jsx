import { Code, Terminal, ChevronRight, Github, Twitter, Linkedin } from "lucide-react";
import React from "react";
import "../../App.css";
function Footer()
{
    return(
    <div className="bg-gray-800 rounded-t-3xl">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <Code className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                  the4code
                </span>
              </div>
              <p className="text-gray-300 text-base">
                Your trusted source for the latest in coding, blockchain, and cryptocurrency news and tutorials.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Content</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Articles
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Tutorials
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Podcasts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Videos
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Categories</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Blockchain
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Cryptocurrency
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Programming
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2025 the4code. All rights reserved.</p>
          </div>
        </div>
    </div>
    );
}

export default Footer;