import styled from "styled-components";

const StyledStats = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    display: inline-block;
    width: 13%;
    border: 3px solid firebrick;
    background-color: white;
    color: firebrick;
    border-radius: 10px;
    &:hover {
      background-color: firebrick;
      border-color: crimson;
      color: white;
    }
  }
  .stats {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .stat {
      width: 20%;
      margin: 2%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 3px solid firebrick;
      border-radius: 15px;
      padding: 5%;
    }
  }
`;

export default StyledStats;
