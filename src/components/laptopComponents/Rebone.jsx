import React, { Component } from "react";
import styled from "styled-components";
class Rebone extends Component {
	render() {
		return (
			<React.Fragment>
				<Ribonetop className="rebone-top"></Ribonetop>
				<Ribonebottom className="rebone-bottom"></Ribonebottom>
				<Riboneleft className="rebone-left"></Riboneleft>
				<Riboneright className="rebone-right"></Riboneright>
			</React.Fragment>
		);
	}
}

export default Rebone;

const Ribonetop = styled.span`
	&::before {
		position: absolute;
		content: "";
		width: 100%;
		height: 15px;
		background-color: #dfa960;
		top: 3%;
		left: 0;
		z-index: -1;
	}
	&::after {
		position: absolute;
		content: url(img/ribbons/brqx_ribbon_double_0100_2018.png);
		width: 100px;
		height: 100px;
		background-color: transparent;
		top: 0%;
		left: -50px;
		z-index: 2;
	}
`;

const Riboneleft = styled.span`
	&::before {
		position: absolute;
		content: "";
		width: 15px;
		height: 94%;
		background-color: #dfa960;
		top: 3%;
		left: 0;
		z-index: 1;
	}
`;
const Ribonebottom = styled.span`
	&::before {
		position: absolute;
		content: "";
		width: 100%;
		height: 15px;
		background-color: #dfa960;
		bottom: 3%;
		left: 0;
		z-index: 1;
	}
`;
const Riboneright = styled.span`
	&::before {
		position: absolute;
		content: "";
		width: 15px;
		height: 94%;
		background-color: #dfa960;
		top: 3%;
		right: 0;
		z-index: 1;
	}
	&::after {
		position: absolute;
		content: url(img/ribbons/brqx_ribbon_double_0100_2018.png);
		width: 100px;
		height: 100px;
		background-color: transparent;
		bottom: 0%;
		right: -50px;
		z-index: 1;
	}
`;
