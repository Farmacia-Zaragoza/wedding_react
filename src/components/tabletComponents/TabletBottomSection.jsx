import React, { Component } from "react";
import styled from "styled-components";
import FlagContainer from "./FlagContainer";
import FooterSection from "./FooterSection";

export class TabletBottomSection extends Component {
	render() {
		return (
			<Tabletbottomcontainer className="tablet-botom-container">
				<FlagContainer className="tablet-flag-container" />
				<FooterSection className="tablet-search-and-social-btn" />
			</Tabletbottomcontainer>
		);
	}
}

export default TabletBottomSection;

const Tabletbottomcontainer = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
`;
