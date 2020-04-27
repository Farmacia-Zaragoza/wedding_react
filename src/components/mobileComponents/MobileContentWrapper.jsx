import React, { Component } from "react";
import styled from "styled-components";
// import MobileContents from "./MobileContents";
import MobileBottomSection from "./MobileBottomSection";
import TextContents from "../Common/TextContents";

class MobileContentWrapper extends Component {
	render() {
		return (
			<React.Fragment>
				<Mobilecontainer className="mobile-text-container">
					<Mobiletextcontent>
						<div className="mobile-text-wrapper">
							<div className="mobile-content">
								<Mobileprofileimg>
									<img
										className="mobile-content-images"
										src={
											process.env.PUBLIC_URL +
											"/img/parragraphs/brqx_ped09bod_pers_-_Boda_Maribel_y_Ricardo_-_Iglesia_de_Pedrezuela_-_01_de_Mayo_de_2009_-_DSCN0055_3264x2448.jpg"
										}
										alt="wedding left logos"
									/>
								</Mobileprofileimg>
								{/* <MobileContents /> */}
								{/* wedding common text for all devices  */}
								<TextContents />
							</div>
						</div>
					</Mobiletextcontent>
				</Mobilecontainer>

				<MobileBottomSection />
			</React.Fragment>
		);
	}
}

export default MobileContentWrapper;

const Mobilecontainer = styled.div`
	width: calc(100% - 30px);
	height: calc(100% - 180px);
	position: absolute;
	top: 110px;
	left: 15px;
	overflow: overlay;
`;

const Mobiletextcontent = styled.div`
	position: absolute;
	width: 90%;
	height: calc(100% - 30px);
	top: 0px;
	left: 50%;
	transform: translate(-50%, 0%);
	overflow: overlay;
	background-color: #eaeaea;
	padding: 15px;
`;

const Mobileprofileimg = styled.div`
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
