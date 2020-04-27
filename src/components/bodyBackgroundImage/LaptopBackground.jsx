import React, { Component } from "react";
import styled from "styled-components";
import WeddingHeader from "../headerSection/WeddingHeader";
import HeartBackground from "./../heartSection/HeartBackground";
import LaptopHeartBackground from "./../laptopComponents/LaptopHeartBackground";
class LaptopBackground extends Component {
	render() {
		return (
			<React.Fragment>
				<Laptopbackgroundimage laptopbg>
					<WeddingHeader />
					<LaptopHeartBackground />
				</Laptopbackgroundimage>
			</React.Fragment>
		);
	}
}

export default LaptopBackground;

const Laptopbackgroundimage = styled.div`
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100%;
	width: 100%;
	position: relative;
	z-index: 1;
	background-image: ${props =>
		props.laptopbg
			? 'url("img/backgrounds/brqx_wedding_desktop_1920_2018.png")'
			: "linear-gradient(#F1D4DF, #FDFAAE)"};
`;
