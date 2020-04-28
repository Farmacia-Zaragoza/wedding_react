import React, { Component } from "react";
import styled from "styled-components";

class LaptopDropdownMenu extends Component {
	render() {
		return (
			<React.Fragment>
				<Dropdownmenu className="laptop-dropdown-menus-wrapper">
					<div className="laptop-dropdown-menu-left">
						<span className="laptop-ascerisk-btn">
							<img
								src="img/war_symbols/brqx_ascerisk_war_050_2017.png"
								alt="stay button"
							/>
						</span>
						<div className="laptop-dropdown-menu-items">
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Illum, dolore.
							</p>
						</div>
					</div>
					<div className="laptop-dropdown-menu-right">
						<span className="laptop-ascerisk-btn">
							<img
								src="img/war_symbols/brqx_ascerisk_war_050_2017.png"
								alt="stay button"
							/>
						</span>
						<div className="laptop-dropdown-menu-items">
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Illum, dolore.
							</p>
						</div>
					</div>
				</Dropdownmenu>
			</React.Fragment>
		);
	}
}

export default LaptopDropdownMenu;

const Dropdownmenu = styled.section`
	position: absolute;
	width: 100%;
	margin: 0 auto;
	top: 20%;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	transform: translate(0%, -50%);
	.laptop-dropdown-menu-left {
		span.laptop-ascerisk-btn {
			position: absolute;
			top: 0;
			left: -17%;
			width: 15%;
			height: 100%;
			cursor: pointer;
			img {
				width: 100%;
				height: 100%;
			}
		}
		position: relative;
		width: 20%;
		left: 50%;
		transform: translate(-115%);
		background-color: #fd6448;
		.laptop-dropdown-menu-items {
			width: 100%;
			height: 100%;
			overflow: hidden;
			white-space: nowrap;

			p {
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				text-align: center;
				font-size: 1vw;
				padding: 2%;
			}
		}
	}
	.laptop-dropdown-menu-right {
		span.laptop-ascerisk-btn {
			position: absolute;
			top: 0;
			right: -17%;
			width: 15%;
			height: 100%;
			cursor: pointer;
			img {
				width: 100%;
				height: 100%;
			}
		}
		position: relative;
		width: 20%;
		right: 50%;
		transform: translate(115%);
		background-color: #fd6448;
		.laptop-dropdown-menu-items {
			width: 100%;
			height: 100%;
			overflow: hidden;
			white-space: nowrap;

			p {
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				text-align: center;
				font-size: 1vw;
				padding: 2%;
			}
		}
	}
`;
