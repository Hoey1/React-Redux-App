import React from "react";
import { connect } from "react-redux";
import { useRouteMatch, Link } from "react-router-dom";
import { rollStats } from "../actions/actions";
import StyledStats from "../styles/rollStatsStyle";

function RollStats(props) {
  const match = useRouteMatch("localhost:3000/roll-stats");

  const generateStat = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  const rollStats = (event) => {
    event.preventDefault();
    let stats = [];
    for (let i = 0; i <= 5; i++) {
      const stat = generateStat(6, 20);
      stats.push(stat);
    }
    props.rollStats(stats);
    console.log(props.stats);
    console.log(stats);
  };
  console.log(props);

  if (props.stats.length > 1) {
    return (
      <StyledStats className="rollstatsWrapper">
        <button onClick={rollStats}>Roll Stats</button>
        <div className="stats">
          <div className="stat">
            <h3>Strength</h3>
            <p>{props.stats[0]}</p>
          </div>
          <div className="stat">
            <h3>Dexterity</h3>
            <p>{props.stats[1]}</p>
          </div>
          <div className="stat">
            <h3>Constitution</h3>
            <p>{props.stats[2]}</p>
          </div>
          <div className="stat">
            <h3>Intelligence</h3>
            <p>{props.stats[3]}</p>
          </div>
          <div className="stat">
            <h3>Wisdom</h3>
            <p>{props.stats[4]}</p>
          </div>
          <div className="stat">
            <h3>Charisma</h3>
            <p>{props.stats[5]}</p>
          </div>
        </div>
        <h2>Great Stats! Now move to classess!</h2>
        <Link id="greatbutton" to="/pick-class">
          <button>Classes</button>
        </Link>
      </StyledStats>
    );
  } else {
    return (
      <StyledStats className="rollstatsWrapper">
        <button onClick={rollStats}>Roll Stats</button>
        <div className="stats">
          <div className="stat">
            <h3>Strength</h3>
            <p>{props.stats[0]}</p>
          </div>
          <div className="stat">
            <h3>Dexterity</h3>
            <p>{props.stats[1]}</p>
          </div>
          <div className="stat">
            <h3>Constitution</h3>
            <p>{props.stats[2]}</p>
          </div>
          <div className="stat">
            <h3>Intelligence</h3>
            <p>{props.stats[3]}</p>
          </div>
          <div className="stat">
            <h3>Wisdom</h3>
            <p>{props.stats[4]}</p>
          </div>
          <div className="stat">
            <h3>Charisma</h3>
            <p>{props.stats[5]}</p>
          </div>
        </div>
      </StyledStats>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stats: state.character.stats,
  };
};

export default connect(mapStateToProps, { rollStats })(RollStats);
