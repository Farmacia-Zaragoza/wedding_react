import React, { Component } from "react";
import styled from "styled-components";
import MobileContentWrapper from "./MobileContentWrapper";
import MobileMenu from "./MobileMenu";
import MobileRebone from "./MobileRebone";

export default class MobileMainBody extends Component {
	render() {
		return (
			<Mobilebody className="mobile-body-wrapper">
				<div className="mobile-body">
					<MobileRebone />
					<MobileMenu />
					<MobileContentWrapper />
				</div>
			</Mobilebody>
		);
	}
}

const Mobilebody = styled.div`
	width: 100%;
	height: calc(100% - 118px);
	position: relative;
	top: 0 !important;
	.mobile-body {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: relative;
	}
`;
