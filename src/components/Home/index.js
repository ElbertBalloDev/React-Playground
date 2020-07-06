import React from "react";
import styled from "styled-components";
import headshot from "./headshot.png";

const HomeWrapper = styled.div`
  width:30rem;
  height: 30rem;
  min-height: 400px;
  min-width: 400px;
  background-color: #fff;
  margin: auto;
  border: 6px solid black;
  border-radius: 50px;
  display: flex;
  display: block;
`;

const ProfileImage = styled.div`
  background: url(${props => props.image});
  background-size: contain;
  background-position: center;
  width: 15rem;
  height: 15rem;
  min-height: 180px;
  min-width: 180px;
  margin: auto;
  margin-top: 8%;
  border-radius: 50%;
  border: 2px solid black;
  margin-bottom: 0;
`;

const Name = styled.h1`
margin-top:2vh;
text-align: center;
font-size:24px;
`;

const Home = () => {
	return <>
  <HomeWrapper>
  <ProfileImage image={headshot}></ProfileImage>
  <Name>Elbert Ballo</Name>
  <Name>Software Engineer</Name>
  </HomeWrapper>
  </>;
};

export default Home;
