import React, { Component } from "react";
import styled from "styled-components";
import TableRebone from "./TableRebone";
import TabletContentWrapper from "./TabletContentWrapper";

export default class TabletMainBody extends Component {
	render() {
		return (
			<Tabletbody>
				<div className='tablet-body'>
					{/* tablet body rebones */}
					<TableRebone />
					{/* tablet main menu area START */}
					<TabletContentWrapper />
				</div>
			</Tabletbody>
		);
	}
}

const Tabletbody = styled.div`
	width: 100%;
	height: calc(95% - 81px);
	position: relative;
	top: 0 !important;
	.tablet-body {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: relative;
	}
`;
