import React, { Component } from "react";
import styled from "styled-components";
import { findDOMNode } from "react-dom";
import $ from "jquery";
class FlagContainer extends Component {
	constructor() {
		super();
	}
	tabletFlagSliderRightToleft = () => {
		const speed = 6000;
		const tabletFlagContainer = findDOMNode(this.refs.tabletFlagContainer);
		const tFlagRemainingLength =
			$(tabletFlagContainer)[0].scrollWidth -
			$(tabletFlagContainer).width();
		$(tabletFlagContainer).animate(
			{
				scrollLeft: tFlagRemainingLength,
			},
			speed
		);
	};
	tabletFlagSliderLeftToRight = () => {
		const speed = 3000;
		const tabletFlagContainer = findDOMNode(this.refs.tabletFlagContainer);
		$(tabletFlagContainer).animate(
			{
				scrollLeft: 0,
			},
			speed
		);
	};
	tabletFlagStop = () => {
		const tabletFlagContainer = findDOMNode(this.refs.tabletFlagContainer);
		$(tabletFlagContainer).stop();
	};
	render() {
		return (
			<Flagcontainerdesign>
				<div className="flag-container-wrapper">
					<Tabletarrowleft
						onMouseEnter={this.tabletFlagSliderRightToleft}
						onMouseLeave={this.tabletFlagStop}
					/>
					<div className="flag-container">
						<ul ref="tabletFlagContainer">
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="img/heart_flags/brqx_heart_flag_bangladesh_0100_2018.png"
										alt="wedding left logos"
									/>
								</a>
							</li>
						</ul>
					</div>
					<Tabletarrowright
						onMouseEnter={this.tabletFlagSliderLeftToRight}
						onMouseLeave={this.tabletFlagStop}
					/>
				</div>
			</Flagcontainerdesign>
		);
	}
}

export default FlagContainer;
// background - color: #faf1bc;
const Flagcontainerdesign = styled.div`
	.flag-container-wrapper {
		width: 100%;

		.flag-container {
			width: 80%;
			position: relative;
			left: 50%;
			display: inline-block;
			transform: translate(-50%, 0%);
			ul {
				margin: 0px;
				padding: 0px;
				list-style: none;
				white-space: nowrap;
				overflow: hidden;
				li {
					display: inline-block;
					a {
						display: inline-block;
						padding: 0.5rem 1rem;
						img {
							width: auto;
							height: auto;
							position: relative;
						}
						:hover {
							background-image: url(img/arrows/brqx_wed_arrow_selector_0100_2018.png);
							background-repeat: no-repeat;
							background-position: center center;
							background-size: contain;
							/* position: relative; */
							z-index: 2;
						}
					}
				}
			}
		}
	}
`;

const Tabletarrowleft = styled.div`
	width: 10%;
	height: 50px;
	background-image: url(img/arrows/brqx_wed_arrow_love_left_0025_2018.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: absolute;
	transform: translate(0%, 50%);
	left: 0%;
	top: 0%;
	cursor: pointer;
`;

const Tabletarrowright = styled.div`
	width: 10%;
	height: 50px;
	background-image: url(img/arrows/brqx_wed_arrow_love_right_0025_2018.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: absolute;
	transform: translate(0%, 50%);
	right: 0%;
	cursor: pointer;
	top: 0%;
`;
