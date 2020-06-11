import React from "react";
import { fetchClasses } from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Headerstyle from "../styles/header";

function Header(props) {
  const onClick = (event) => {
    event.preventDefault();
    props.fetchClasses();
  };

  return (
    <Headerstyle>
      <div className="navWrapper">
        <nav>
          <a href="localhost:3000/">Home</a>
          <a href="">About</a>
          <a href="">Login</a>
        </nav>
      </div>
    </Headerstyle>
  );
}
const mapStateToProps = (state) => {
  return {
    classes: state.classes,
  };
};
export default connect(mapStateToProps, { fetchClasses })(Header);
