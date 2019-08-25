import React, { Component } from "react";
import styled from "styled-components";
import WeddingHeader from "../headerSection/WeddingHeader";
import HeartBackground from "../heartSection/HeartBackground";

class Background extends Component {
	render() {
		return (
			<Sitebackground>
				<WeddingHeader />
				<HeartBackground />
			</Sitebackground>
		);
	}
}

export default Background;

const Sitebackground = styled.div`
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100%;
	width: 100%;
	position: relative;
	z-index: 1;
	background-image: ${props =>
		props.tablet
			? "linear-gradient(#f1d5e0, #fcf8b2)"
			: 'url("img/backgrounds/brqx_wedding_desktop_1920_2018.png")'};
`;
