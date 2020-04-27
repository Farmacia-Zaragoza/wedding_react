import React, { Component } from "react";
import styled from "styled-components";
import TextContents from "../Common/TextContents";

class LaptopTextContent extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Laptoptextwrapper className="laptop-text-wrapper">
					<div className="laptop-text__inner-area">
						<TextContents />
					</div>
				</Laptoptextwrapper>
			</React.Fragment>
		);
	}
}

export default LaptopTextContent;

const Laptoptextwrapper = styled.section`
	position: absolute;
	width: 46.5%;
	height: 40%;
	margin: 0 auto;
	top: 43%;
	left: 0;
	right: 0;
	background-color: #eaeaea;
	transform: translate(0%, -50%);
	.laptop-text__inner-area {
		position: relative;
		overflow: auto;
		height: calc(100% + 0%);
		margin: 0 auto;
		width: 100%;
		p {
			font-size: 1.5vw;
		}
		&::-webkit-scrollbar {
			display: none;
			position: absolute;
		}
	}
`;
