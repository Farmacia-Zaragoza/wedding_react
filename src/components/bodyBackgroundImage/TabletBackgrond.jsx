import React, { Component } from "react";
import styled from "styled-components";
import TabletMainBody from "../tabletComponents/TabletMainBody";
import TabletHeaderLeft from "../headerSection/weddingHeaderLeft/TabletHeaderLeft";

export class TabletBackgrond extends Component {
	render() {
		return (
			<Weddingtabletbackground tablet>
				<Tabletbodywrapper>
					<TabletHeaderLeft />
					<TabletMainBody />
				</Tabletbodywrapper>
			</Weddingtabletbackground>
		);
	}
}

export default TabletBackgrond;

const Weddingtabletbackground = styled.div`
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

const Tabletbodywrapper = styled.div`
	width: 90%;
	height: 100%;
	margin: auto;
`;
