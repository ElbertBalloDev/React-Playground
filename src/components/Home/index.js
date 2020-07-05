import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: #fff;
  margin: auto;
  border-radius: 50px;
  display: flex;
`;

const ProfileImage = styled.div`
  width: 23rem;
  height: 23rem;
  margin: auto;
  margin-top: 10%;
  border-radius: 50%;
  background-color: black;
`;

const Home = () => {
	return <>
  <HomeWrapper>
  <ProfileImage />
  </HomeWrapper>
  </>;
};

export default Home;
