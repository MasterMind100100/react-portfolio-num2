import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <NavLink exact to="/">
            Home
          </NavLink>

          <NavLink to="/about-me">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>

        {false ? <button>Add Blog</button> : null}
        <div className="right-side">ajsdkljfa;ksdf</div>
      </div>
    );
  }
}
