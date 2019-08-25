import React, { Component } from "react";
import styled from "styled-components";
import Mobileportfolioimg from "./Mobileportfolioimg";
import TabletContents from "../tabletComponents/TabletContents";

export class MobileTextContent extends Component {
	render() {
		return (
			<React.Fragment>
				<Mobilecontent>
					<div className='mobile-text-content-wrapper'>
						<Mobileportfolioimg />
						<TabletContents />
					</div>
				</Mobilecontent>
			</React.Fragment>
		);
	}
}

export default MobileTextContent;

const Mobilecontent = styled.div`
	width: 100%;

	height: 100%;
`;
