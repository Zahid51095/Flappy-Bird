import React from "react";
import styled from "styled-components";
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;

const App = () => {
  return <Home>
    <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
      <Bird/>
    </Background>
  </Home>;
};

const Home = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  background-image: url("./images/background-day.png");
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props)=> props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;


`;
const Bird = styled.div``;

export default App;
