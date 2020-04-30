import React, { Component } from "react";
import styled from "styled-components";
import { findDOMNode } from "react-dom";
import $ from "jquery";
class TabletHeaderMenu extends Component {
	constructor() {
		super();
	}

	tabletMenuSlideRightToLeft = () => {
		const speed = 6000;
		const tabletMenuContainer = findDOMNode(this.refs.tabletMenuSlide);

		// tRemainingLenth = 'tablet remaing length';
		const tRemainingLenth =
			$(tabletMenuContainer)[0].scrollWidth -
			$(tabletMenuContainer).width();
		$(tabletMenuContainer).animate(
			{
				scrollLeft: tRemainingLenth,
			},
			speed
		);
	};
	tabletMenuSlideLeftToRight = () => {
		const speed = 6000;
		const tabletMenuContainer = findDOMNode(this.refs.tabletMenuSlide);
		$(tabletMenuContainer).animate(
			{
				scrollLeft: 0,
			},
			speed
		);
	};
	tabletMenuSlideStop = () => {
		const tabletMenuContainer = findDOMNode(this.refs.tabletMenuSlide);
		$(tabletMenuContainer).stop();
	};
	render() {
		return (
			<Tabletmenu>
				<Tabletarrowleft
					onMouseEnter={this.tabletMenuSlideLeftToRight}
					onMouseLeave={this.tabletMenuSlideStop}
				/>
				<div className="tablet-header-menu">
					<ul ref="tabletMenuSlide">
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
						<li>
							<a href="#">item</a>
						</li>
					</ul>
				</div>
				<Tabletarrowright
					onMouseEnter={this.tabletMenuSlideRightToLeft}
					onMouseLeave={this.tabletMenuSlideStop}
				/>
			</Tabletmenu>
		);
	}
}

export default TabletHeaderMenu;

const Tabletmenu = styled.div`
	.tablet-header-menu {
		width: 70%;
		display: inline-block;
		position: absolute;
		transform: translate(-50%, -0%);
		left: 50%;
		ul {
			margin: 0px;
			padding: 0px;
			overflow: hidden;
			white-space: nowrap;
			list-style: none;
			li {
				display: inline-block;
				position: relative;
				background-image: url(img/tabs/brqx_tabs_no_selected_war_0100_2017.png);
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
				padding: 0px;
				a {
					display: inline-block;
					color: #000;
					text-transform: uppercase;
					padding: 12px 12px;
					font-size: 0.75rem;
					text-decoration: none;
				}
				:hover {
					background-image: url(img/tabs/brqx_tabs_selected_war_0100_2017.png);
				}
			}
		}
	}
`;

const Tabletarrowleft = styled.div`
	width: 15%;
	height: 20px;
	background-image: url(img/arrows/brqx_wed_arrow_tablet_left_0100_2018.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: absolute;
	transform: translate(0%, 50%);
	left: 0%;
	cursor: pointer;
`;

const Tabletarrowright = styled.div`
	width: 15%;
	height: 20px;
	background-image: url(img/arrows/brqx_wed_arrow_tablet_right_0100_2018.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: absolute;
	transform: translate(0%, 50%);
	right: 0%;
	cursor: pointer;
`;
