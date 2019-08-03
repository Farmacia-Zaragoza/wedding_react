import React, { Component } from "react";
import styled from "styled-components";
import { device } from "./../../devices/Devices";

class WeddingHeaderRight extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Headerrightlogo>
					<div className='desktop__logo'>
						<img
							src={
								process.env.PUBLIC_URL +
								"/img/backgrounds/brqx_wedding_desktop_dvd_tourus_2048_2018.png"
							}
							alt='header right logos'
							srcSet=''
						/>
					</div>
				</Headerrightlogo>
			</React.Fragment>
		);
	}
}

export default WeddingHeaderRight;

const Headerrightlogo = styled.div`
	position: relative;
	width: 50%;
	float: right;
	z-index: 2;
	.desktop__logo {
		margin: 0% 0% 0% 70%;
		display: block;
		img {
			width: 70%;
			height: auto;
		}
	}
	@media ${device.mobileS} {
		/* .desktop__logo {
			display: none;
		} */
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
		/* .desktop__logo {
			margin: 0% 0% 0% 70%;
			display: block;
			img {
				width: 70%;
				height: auto;
			}
		} */
	}
	@media ${device.laptopL} {
	}
	@media ${device.desktop} {
	}
	@media ${device.desktopL} {
	}
`;
