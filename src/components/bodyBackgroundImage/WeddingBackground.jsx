import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../devices/Devices";
import WeddingHeader from "../headerSection/WeddingHeader";
import HeartBackground from "../heartSection/HeartBackground";

class DesktopBackground extends Component {
	render() {
		return (
			<Backgroundimage>
				<WeddingHeader />
				<HeartBackground />
			</Backgroundimage>
		);
	}
}

export default DesktopBackground;

const Backgroundimage = styled.div`
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100%;
	width: 100%;
	position: relative;
	z-index: 1;
	background-image: url("img/backgrounds/brqx_wedding_desktop_1920_2018.png");
	@media ${device.mobileS} {
		/* linear background for mobile devices */
		background-image: linear-gradient(#f1d5e0, #fcf8b2);
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
		/* background image for laptop and above devices  */
		/* background-image: url("img/backgrounds/brqx_wedding_desktop_1920_2018.png"); */
	}
	@media ${device.laptopL} {
	}
	@media ${device.desktop} {
	}
	@media ${device.desktopL} {
	}
`;
