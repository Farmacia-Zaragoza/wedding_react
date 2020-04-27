import React, { Component } from "react";
import styled from "styled-components";
import FooterSection from "./FooterSection";

export class MobileBottomSection extends Component {
	render() {
		return (
			<Mobilebottomcontainer className="mobile-bottom-section">
				{/* <FlagContainer /> */}
				<FooterSection />
			</Mobilebottomcontainer>
		);
	}
}

export default MobileBottomSection;

const Mobilebottomcontainer = styled.div`
	position: absolute;
	width: 90%;
	bottom: 0;
	left: 50%;
	margin-bottom: 15px;
	transform: translate(-50%, 0%);
`;
