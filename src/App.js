import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import mac from "./assets/mac.jpg";

const BodyContainer = styled.div`
	${'' /* width: 100%;
	min-height: 90vh;
	background: #c850c0;
	background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045); */}
  background: url(${mac});
  padding:20vh 0;
  height: 50vh;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &:after {
    content: "";
    display:block;
    width:100%;
    height: 100%;
    background: linear-gradient(45deg, #73c8a9, #373b44);
    position: absolute;
    top:0;
    left:0;
    opacity: .6;
    z-index:0;
  }
`;

const Child = styled.div`
z-index:5;
position: relative;
`;


const App = () => {
	return (
		<>
			<Header />
			<BodyContainer>
      <Child>
				<Route path="/about"><About/></Route>
				<Route path="/portfolio"><Portfolio/></Route>
				<Route path="/contact"><Contact/></Route>
        <Route exact path="/"><Home/></Route>
        </Child>
			</BodyContainer>
		</>
	);
};

export default App;
