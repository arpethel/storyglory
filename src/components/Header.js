import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src="StoryGlory.svg" alt="Story Glory Logo" />
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Stories
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Create a Story
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
