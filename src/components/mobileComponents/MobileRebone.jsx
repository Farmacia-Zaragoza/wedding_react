import React, { Component } from "react";
import styled from "styled-components";

class MobileRebone extends Component {
	render() {
		return (
			<React.Fragment>
				<Rebonetop />
				<Rebonebottom />
			</React.Fragment>
		);
	}
}

export default MobileRebone;

const Rebonetop = styled.span`
	position: absolute;
	width: 100%;
	top: 0;
	::before {
		position: absolute;
		content: "";
		width: 100%;
		height: 15px;
		background-color: #dfa960;
		top: 0;
		left: 0;
		z-index: -1;
	}
`;

const Rebonebottom = styled.span`
	position: absolute;
	width: 100%;
	bottom: 0;
	::before {
		position: absolute;
		content: "";
		width: 100%;
		height: 15px;
		background-color: #dfa960;
		bottom: 0;
		left: 0;
		z-index: -1;
	}
`;
