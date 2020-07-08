import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";

const HeaderContainer = styled.div`
	background-color: #101010;
	display: block;
	height: 5rem;
	width: 100%;
  min-height: 10vh;
  position: sticky;
  top: 0;
  z-index:10;

`;

const InnerHeader = styled.div`
	display: block;
	height: 100%;
	margin: 0 auto;
	width: 70%;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<InnerHeader>
        <Logo />
        <Navigation />
			</InnerHeader>
		</HeaderContainer>
	);
};

export default Header;
