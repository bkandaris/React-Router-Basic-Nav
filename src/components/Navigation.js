import React from "react";
// Importing Link
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      {/* Added new links */}
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
