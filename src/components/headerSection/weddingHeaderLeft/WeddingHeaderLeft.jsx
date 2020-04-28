import React, { Component } from "react";
import styled from "styled-components";
import { device } from "./../../devices/Devices";

class WeddingHeaderLeft extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Headerleftlogo>
					<img
						src="img/logos/brqx_logo_01_ricardo_y_maribel_0100_2018.png"
						alt="wedding left logos"
					/>
				</Headerleftlogo>
			</React.Fragment>
		);
	}
}

export default WeddingHeaderLeft;

const Headerleftlogo = styled.div`
	width: 50%;
	float: left;
	position: relative;
	z-index: 2;

	@media ${device.mobileS} {
		img {
			width: 50%;
			height: auto;
			margin-top: 2%;
			padding-left: 5%;
		}
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
	@media ${device.laptopL} {
	}
	@media ${device.desktop} {
	}
	@media ${device.desktopL} {
	}
`;
