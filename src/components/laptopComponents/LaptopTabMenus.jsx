import React, { Component } from "react";
import styled from "styled-components";
class LaptopTabMenus extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Tabmenus className="laptop-tab-menu-wrapper">
					<div className="tab-menu">
						<ul className="tab-menus">
							<li data-tab="tab-1" className="current">
								<a href="#">Bride</a>
							</li>
							<li data-tab="tab-2">
								<a href="#">Boyfriend</a>
							</li>
							<li data-tab="tab-3">
								<a href="#">place</a>
							</li>
							<li data-tab="tab-4">
								<a href="#">lucy</a>
							</li>
						</ul>
					</div>
				</Tabmenus>
			</React.Fragment>
		);
	}
}

export default LaptopTabMenus;

const Tabmenus = styled.section`
	width: 17%;
	position: absolute;
	z-index: 11;
	transform: translate(-50%, 50%) rotate(90deg);
	right: 9%;
	top: 38%;
	.tab-menu {
		position: relative;

		ul {
			overflow: hidden;
			float: left;
			white-space: nowrap;
			margin: 0;
			padding: 0;
			width: 100%;
			li {
				display: inline;
				a {
					display: inline-block;
					padding: 2px 5px;
					border: 1px solid #000;
					background-color: #fff;
					color: #000;
					text-transform: uppercase;
					text-decoration: none;
					font-size: 0.7vw;
					cursor: pointer;
					outline: none;
					width: 20%;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					text-align: center;
				}
			}
		}
	}
`;
