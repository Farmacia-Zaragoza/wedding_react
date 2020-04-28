import React, { Component } from "react";
import styled from "styled-components";

class LaptopMenu extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Menu className="laptop-menus">
					<section className="laptop-menu-left">
						<ul className="menu-left">
							<li>
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
						<ul className="menu-right">
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

export default LaptopMenu;

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
