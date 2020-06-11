import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const Start = (props) => {
  const match = useRouteMatch("/");

  return (
    <div className="headerHero">
      <h1>Adventure Awaits!</h1>
      <Link to="/roll-stats">
        <button>Start Now</button>
      </Link>
    </div>
  );
};

export default Start;
