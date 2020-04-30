import React, { Component } from "react";
import styled from "styled-components";
import { findDOMNode } from "react-dom";
import $ from "jquery";
class LaptopArrow extends Component {
	constructor() {
		super();
	}
	state = {};

	slideLeft = () => {
		const speed = 3000;
		const menuLeftContainer = findDOMNode(this.refs.menuLeft);
		console.log("left slide " + menuLeftContainer);
		const menuRightContainer = findDOMNode(this.refs.menuRight);
		console.log("right slide " + menuRightContainer);

		// width of the menu LEFT-MENU
		const LeftRemainingLength =
			$(menuLeftContainer)[0].scrollWidth - $(menuLeftContainer).width();
		console.log("LeftRemainingLength " + LeftRemainingLength);
		// width of the menu RIGHT-MENU
		const RightRemainingLength =
			$(menuRightContainer)[0].scrollWidth -
			$(menuRightContainer).width();
		console.log("RightRemainingLength " + RightRemainingLength);

		// animation for left menu
		$(menuLeftContainer).animate(
			{
				scrollLeft: LeftRemainingLength,
			},
			speed
		);
		// animate fo right menu
		$(menuRightContainer).animate(
			{
				scrollLeft: RightRemainingLength,
			},
			speed
		);
	};
	slideRight = () => {
		const speed = 3000;
		const menuLeftContainer = findDOMNode(this.refs.menuLeft);
		const menuRightContainer = findDOMNode(this.refs.menuRight);
		// animation for left menu
		$(menuLeftContainer).animate(
			{
				scrollLeft: 0,
			},
			speed
		);
		// animate fo right menu
		$(menuRightContainer).animate(
			{
				scrollLeft: 0,
			},
			speed
		);
	};
	slideStop = () => {
		const menuLeftContainer = findDOMNode(this.refs.menuLeft);
		const menuRightContainer = findDOMNode(this.refs.menuRight);
		$(menuLeftContainer).stop();
		$(menuRightContainer).stop();
	};
	render() {
		return (
			<React.Fragment>
				<Laptoparrows className="laptop-arrows">
					<div className="laptop-arrow-left">
						<img
							src="img/arrows/brqx_wed_arrow_left_0200_2018.png"
							alt="laptop menus arrows"
							ref="leftArrow"
							onMouseEnter={this.slideRight}
							onMouseLeave={this.slideStop}
						/>
					</div>
					<div className="laptop-arrow-right">
						<img
							src="img/arrows/brqx_wed_arrow_right_0200_2018.png"
							alt="laptop menus arrows"
							ref="rightArrow"
							onMouseEnter={this.slideLeft}
							onMouseLeave={this.slideStop}
						/>
					</div>
				</Laptoparrows>
				<Menu className="laptop-menus">
					<section className="laptop-menu-left">
						<ul className="menu-left" ref="menuLeft">
							<li className="active">
								<a href="#">item 01</a>
							</li>
							<li>
								<a href="#">item 02</a>
							</li>
							<li>
								<a href="#">item 03</a>
							</li>
							<li>
								<a href="#">item 04</a>
							</li>
							<li>
								<a href="#">item 05</a>
							</li>
							<li>
								<a href="#">item 06</a>
							</li>
							<li>
								<a href="#">item 07</a>
							</li>
							<li>
								<a href="#">item 08</a>
							</li>
							<li>
								<a href="#">item 09</a>
							</li>
							<li>
								<a href="#">item 10</a>
							</li>
							<li>
								<a href="#">item 11</a>
							</li>
							<li>
								<a href="#">item 12</a>
							</li>
							<li>
								<a href="#">item 13</a>
							</li>
							<li>
								<a href="#">item 14</a>
							</li>
						</ul>
					</section>

					<section className="laptop-menu-right">
						<ul className="menu-right" ref="menuRight">
							<li>
								<a href="#">item 04</a>
							</li>
							<li>
								<a href="#">item 05</a>
							</li>
							<li>
								<a href="#">item 06</a>
							</li>
							<li>
								<a href="#">item 07</a>
							</li>
							<li>
								<a href="#">item 08</a>
							</li>
							<li>
								<a href="#">item 09</a>
							</li>
							<li>
								<a href="#">item 10</a>
							</li>
							<li>
								<a href="#">item 11</a>
							</li>
							<li>
								<a href="#">item 12</a>
							</li>
							<li>
								<a href="#">item 13</a>
							</li>
							<li>
								<a href="#">item 14</a>
							</li>
							<li>
								<a href="#">item 15</a>
							</li>
							<li>
								<a href="#">item 16</a>
							</li>
							<li>
								<a href="#">item 17</a>
							</li>
						</ul>
					</section>
				</Menu>
			</React.Fragment>
		);
	}
}

export default LaptopArrow;

const Laptoparrows = styled.div`
	position: absolute;
	width: 100%;
	margin: 0 auto;
	top: 7%;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	transform: translate(0%, -50%);
	z-index: 101;
	.laptop-arrow-left {
		position: relative;
		width: 15%;
		left: 50%;
		transform: translate(-140%);
		background-color: transparent;
		img {
			width: 100%;
			cursor: pointer;
		}
	}
	.laptop-arrow-right {
		position: relative;
		width: 15%;
		right: 50%;
		transform: translate(140%);
		background-color: transparent;
		img {
			width: 100%;
			cursor: pointer;
		}
	}
`;
const Menu = styled.section`
	position: absolute;
	width: 100%;
	margin: 0 auto;
	top: 15%;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	transform: translate(0%, -50%);
	.laptop-menu-left {
		position: relative;
		width: 20%;
		left: 50%;
		transform: translate(-115%);
		ul {
			overflow: hidden;
			float: left;
			white-space: nowrap;
			margin: 0;
			padding: 0;
			width: 100%;
			position: relative;
			li {
				display: inline-block;
				position: relative;
				background-image: url(img/tabs/brqx_tabs_no_selected_war_0100_2017.png);
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
				padding: 0px;

				&:hover {
					background-image: url(img/tabs/brqx_tabs_selected_war_0100_2017.png);
				}
				&.active {
					background-image: url(img/tabs/brqx_tabs_selected_war_0100_2017.png);
				}
				a {
					display: inline-block;
					color: #000;
					text-transform: uppercase;
					padding: 12px 12px;
					font-size: 1vw;
					text-decoration: none;
				}
			}
		}
	}
	.laptop-menu-right {
		position: relative;
		width: 20%;
		right: 50%;
		transform: translate(115%);
		ul {
			overflow: hidden;
			float: left;
			white-space: nowrap;
			margin: 0;
			padding: 0;
			width: 100%;
			li {
				display: inline-block;
				position: relative;
				background-image: url(img/tabs/brqx_tabs_no_selected_war_0100_2017.png);
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
				padding: 0px;
				&:hover {
					background-image: url(img/tabs/brqx_tabs_selected_war_0100_2017.png);
				}
				a {
					display: inline-block;
					color: #000;
					text-transform: uppercase;
					padding: 12px 12px;
					font-size: 1vw;
					text-decoration: none;
				}
			}
		}
	}
`;
