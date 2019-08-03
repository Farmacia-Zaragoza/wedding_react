import React, { Component } from "react";
import styled from "styled-components";
import { device } from "./../devices/Devices";

class HeartBackground extends Component {
	state = {};
	render() {
		return <Heartbackground />;
	}
}

export default HeartBackground;

const Heartbackground = styled.div`
	width: 80%;
	height: inherit;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: 50% 50%;
	margin: 0 auto;
	position: relative;
	max-height: 80%;
	background-image: url("img/hearts/brqx_heart_pink_yellow_0800_2018.png");
	@media ${device.mobileS} {
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
		/* background image for laptop and above devices  */
	}
	@media ${device.laptopL} {
	}
	@media ${device.desktop} {
	}
	@media ${device.desktopL} {
	}
`;
