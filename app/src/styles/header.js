import styled from "styled-components";

const Headerstyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  background-color: crimson;
  .navWrapper {
    width: 30%;
    margin: 0;
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      a {
        color: white;
        text-decoration: none;
        &:hover {
          color: grey;
        }
      }
    }
  }
  img {
    width: 15%;
  }
`;
export default Headerstyle;
