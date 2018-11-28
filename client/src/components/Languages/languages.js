import React from "react";
import { Link } from "react-router-dom";
import "./languages.css";

const Languages = () => {
  return (
    <div className="test">
      <Link to="/git" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          Git
        </button>
      </Link>
      <Link to="/html" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          HTML
        </button>
      </Link>
      <Link to="/css" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          CSS
        </button>
      </Link>
      <Link to="/bootstrap" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          Bootstrap
        </button>
      </Link>
      <Link to="/javascript" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          Javascript
        </button>
      </Link>
      <Link to="/jquery" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          jQuery
        </button>
      </Link>
      <Link to="/ajax" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          AJAX
        </button>
      </Link>
      <Link to="/node" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          Node
        </button>
      </Link>
      <Link to="/express" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          Express
        </button>
      </Link>
      <Link to="/mysql" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          MySQL
        </button>
      </Link>
      <Link to="/mongoose" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          MongoDB
        </button>
      </Link>
      <Link to="/react" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          React
        </button>
      </Link>
      <Link to="/redux" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          Redux
        </button>
      </Link>
      <Link to="/angular" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          Angular
        </button>
      </Link>
      <Link to="/vue" className="btn btn-link text-secondary">
        <button type="button" className="btn btn-light">
          Vue
        </button>
      </Link>
    </div>
  );
};

export default Languages;
