import React from "react";
import { Link } from "react-router-dom";

const Languages = () => {
  return (
    <div className="test">
      <Link to="/html" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-outline-secondary">
          HTML
        </button>
      </Link>
      <Link to="/css" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-outline-secondary">
          CSS
        </button>
      </Link>
      <Link to="/javascript" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-outline-secondary">
          Javascript
        </button>
      </Link>
    </div>
  );
};

export default Languages;
