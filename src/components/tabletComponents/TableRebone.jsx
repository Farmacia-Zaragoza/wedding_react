import React, { Component } from "react";
import styled from "styled-components";

class TableRebone extends Component {
	render() {
		return (
			<React.Fragment>
				<Rebonetop />
				<Reboneleft />
				<Reboneright />
				<Rebonebottom />
			</React.Fragment>
		);
	}
}

export default TableRebone;

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

const Reboneleft = styled.span`
	position: absolute;
	height: 100%;
	left: 0;
	::before {
		position: absolute;
		content: "";
		width: 15px;
		height: 100%;
		background-color: #dfa960;
		top: 0;
		left: 0;
		z-index: -1;
	}
`;

const Reboneright = styled.span`
	position: absolute;
	height: 100%;
	right: 0;
	::before {
		position: absolute;
		content: "";
		width: 15px;
		height: 100%;
		background-color: #dfa960;
		top: 0;
		right: 0;
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
