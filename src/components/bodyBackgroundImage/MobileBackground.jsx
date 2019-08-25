import React, { Component } from "react";
import styled from "styled-components";
import MobileHeaderLeft from "../headerSection/weddingHeaderLeft/MobileHeaderLeft";
import MobileHeaderRight from "../headerSection/weddingHeaderRight/MobileHeaderRight";
import MobileMainBody from "./../mobileComponents/MobileMainBody";

export class MobileBackground extends Component {
	render() {
		return (
			<Weddingmobilebackground mobile>
				<Mheadergride>
					<div className='Mobile-header-area'>
						<div className='m-header-left'>
							<MobileHeaderLeft />
						</div>
						<div className='m-header-right'>
							<MobileHeaderRight />
						</div>
					</div>
				</Mheadergride>

				<MobileMainBody />
			</Weddingmobilebackground>
		);
	}
}

export default MobileBackground;

const Weddingmobilebackground = styled.div`
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100%;
	width: 100%;
	position: relative;
	z-index: 1;
	background-image: ${props =>
		props.mobile
			? "linear-gradient(#F1D4DF, #FDFAAE)"
			: 'url("img/backgrounds/brqx_wedding_desktop_1920_2018.png")'};
`;

// mobile header grid section
const Mheadergride = styled.div`
	.Mobile-header-area {
		display: grid;
		grid-template-columns: 50% 50%;
		padding: 1rem;
		/* display: flex; */
		.m-header-left {
			text-align: start;
		}

		.m-header-right {
			text-align: end;
		}
	}
`;
