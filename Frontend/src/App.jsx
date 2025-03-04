import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CategoryShowcase from "./components/CategoryShowcase/CategoryShowcase";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Articles from "./components/Articles/Articles";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navbar />

      <Hero />

      {/*Articles */}
      <Articles />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Categories Section */}
      <CategoryShowcase />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
