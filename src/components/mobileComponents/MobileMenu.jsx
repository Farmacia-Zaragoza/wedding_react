import React, { Component } from "react";
import styled from "styled-components";

class MobileMenu extends Component {
	render() {
		return (
			<Mobilebodywrapper>
				<div className='mobile-menu-slide-area'>
					<div className='mobile-menu-text'>
						<h1>Lorem ipsum dolor ...</h1>
					</div>
					<div className='mobile-menu-diamond'>
						<img
							src={
								process.env.PUBLIC_URL +
								"/img/arrows/brqx_wed_red_diamond_0050_2019.png"
							}
							alt='wedding left logos'
						/>
					</div>
				</div>
			</Mobilebodywrapper>
		);
	}
}

export default MobileMenu;

const Mobilebodywrapper = styled.div`
	.mobile-menu-slide-area {
		display: grid;
		grid-template-columns: 70% 30%;
		padding: 1rem;
	}
	.mobile-menu-text {
		background-color: #fd6448;
		padding: 1rem;
		h1 {
			color: #000;
			text-transform: uppercase;
			font-size: 1.5rem;
		}
	}
	.mobile-menu-diamond {
		text-align: end;
		img {
			width: 100%;
			height: 100%;
		}
	}
`;
