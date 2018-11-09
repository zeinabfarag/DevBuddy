import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      Home
    </a>
    <a className="navbar-brand" href="/resources">
      Resources
    </a>
    <a className="navbar-brand" href="/articles">
      Articles
    </a>
    <a className="navbar-brand" href="/jobposting">
      Job Posting
    </a>
    <a className="navbar-brand" href="/meetups">
      Meet Ups
    </a>
    <a className="navbar-brand" href="/login">
      Login
    </a>
    <a className="navbar-brand" href="/about">
      About
    </a>
  </nav>
);

export default Nav;
