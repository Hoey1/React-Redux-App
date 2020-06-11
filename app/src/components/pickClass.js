import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchClasses } from "../actions/actions";
import { connect } from "react-redux";
import axios from "axios";

function PickClass(props) {
  const match = useRouteMatch("/pick-class");
  useEffect(() => {
    props.fetchClasses();
  }, []);

  return (
    <div className="pickClass">
      {props.classes.map((type) => {
        console.log(type);
        return (
          <div className="class">
            <button>{type.name}</button>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    classes: state.classes,
  };
};

export default connect(mapStateToProps, { fetchClasses })(PickClass);
