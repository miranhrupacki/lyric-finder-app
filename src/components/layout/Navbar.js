import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <nav className="navbar navbar-dark bg-dark mb-5">
    <span className="navbar-brand mb-0 h1 mx-auto">Lyric Finder</span>
    <Link to='/'><button className="btn btn-dark btn-lg btn-outline-primary mr-2">Home</button></Link>
    <Link to='/login/'><button className="btn btn-dark btn-lg btn-outline-primary">Login</button></Link>
  </nav>;
};
export default Navbar;
