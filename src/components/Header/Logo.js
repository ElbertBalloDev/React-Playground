import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const LogoContainer = styled.div`
	height: 100%;
	display: table;
	float: left;
`;

const LogoH1 = styled(Link)`
	color: #fff;
	height: 100%;
	display: table-cell;
	vertical-align: middle;
	font-size: 40px;
	font-weight: 300;
	font-family: "Montserrat";
  text-shadow: 2px 2px #833ab4;

  &:hover{
    cursor: pointer;
    text-shadow: 2px 2px #833ab4;
  }
`;

const LogoSpan = styled.span`
	font-weight: 800;
`;

const Logo = () => {
	return (
		<LogoContainer>
			<LogoH1 to="/">
				ELBERT<LogoSpan>BALLO</LogoSpan>
			</LogoH1>
		</LogoContainer>
	);
};

export default Logo;
