import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const BodyContainer = styled.div`
	width: 100%;
	min-height: 90vh;
	background: #c850c0;
	background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
  display: flex;
`;

const App = () => {
	return (
		<>
			<Header />
			<BodyContainer>
				<Route path="/about"><About/></Route>
				<Route path="/portfolio"><Portfolio/></Route>
				<Route path="/contact"><Contact/></Route>
        <Route exact path="/"><Home/></Route>
			</BodyContainer>
		</>
	);
};

export default App;
