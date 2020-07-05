import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationContainer = styled.div`
	float: right;
	height: 100%;
`;

const NavList = styled.ul`
	float: right;
	height: 100%;
`;

const Anchor = styled(Link)`
	height: 100%;
	display: table;
	float: left;
	padding: 0 20px;

	&:last-child {
		padding-right: 0;
	}
`;

const ListItem = styled.li`
	display: table-cell;
	vertical-align: middle;
	height: 100%;
	color: white;
	font-family: "Montserrat";

	&:active,
	&:hover {
		color: #833ab4;
		cursor: pointer;
		font-weight: 600;
	}
`;

const Navigation = () => {
	return (
		<NavigationContainer>
			<NavList>
				<Anchor to="/">
					<ListItem>HOME</ListItem>
				</Anchor>
				<Anchor to="/about">
					<ListItem>ABOUT</ListItem>
				</Anchor>
				<Anchor to="/portfolio">
					<ListItem>PORTFOLIO</ListItem>
				</Anchor>
				<Anchor to="/contact">
					<ListItem>CONTACT</ListItem>
				</Anchor>
			</NavList>
		</NavigationContainer>
	);
};

export default Navigation;
