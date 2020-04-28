import React, { Component } from "react";
import styled from "styled-components";
import TabletHeaderMenu from "./TabletHeaderMenu";
import TabletContents from "./TabletContents";
import TabletBottomSection from "./TabletBottomSection";

class TabletContentWrapper extends Component {
	render() {
		return (
			<Tabletcontainer>
				<TabletHeaderMenu />
				<Tablettextcontent className="tablet-text-content">
					<div className="tablet-text-wrapper">
						<div className="tablet-content">
							<Tabletprofileimg>
								<img
									className="tablet-content-images"
									src="img/parragraphs/brqx_ped09bod_pers_-_Boda_Maribel_y_Ricardo_-_Iglesia_de_Pedrezuela_-_01_de_Mayo_de_2009_-_DSCN0055_3264x2448.jpg"
									alt="wedding left logos"
								/>
							</Tabletprofileimg>
							<TabletContents />
						</div>
					</div>
				</Tablettextcontent>
				{/* tablet footer country flag, search-bar and social icons  */}
				<TabletBottomSection className="tablet-bottom-container" />
			</Tabletcontainer>
		);
	}
}

export default TabletContentWrapper;

const Tabletcontainer = styled.div`
	width: calc(100% - 30px);
	height: calc(100% - 30px);
	position: absolute;
	top: 15px;
	left: 15px;
`;

const Tablettextcontent = styled.div`
	position: relative;
	width: 90%;
	height: calc(100% - 242px);
	top: 50px;
	left: 50%;
	transform: translate(-50%, 0%);
	overflow: auto;
	background-color: #eaeaea;
	padding: 15px;
`;

const Tabletprofileimg = styled.div`
	img {
		width: 100%;
		height: 100%;
	}
	width: 250px;
	height: 300px;
	background-color: #ddd;
	float: left;
	margin-right: 1rem;
	margin-bottom: 1rem;
`;
