import React, { Component } from "react";
import styled from "styled-components";

class TabletHeaderLeft extends Component {
	render() {
		return (
			<Tabletlogo>
				<img
					src="img/logos/brqx_logo_01_ricardo_y_maribel_0100_2018.png"
					alt="wedding left logos"
				/>
			</Tabletlogo>
		);
	}
}

export default TabletHeaderLeft;

const Tabletlogo = styled.div`
	height: 81px;
	width: 100%;
	display: block;
`;
