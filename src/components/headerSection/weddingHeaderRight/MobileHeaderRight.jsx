import React, { Component } from "react";
import styled from "styled-components";
class MobileHeaderRight extends Component {
	render() {
		return (
			<React.Fragment>
				<Mobileflagcombo>
					<img
						src="img/heart_flags/brqx_break_heart_flag_portugal_2018_320_200.png"
						alt="wedding left logos"
					/>
				</Mobileflagcombo>
			</React.Fragment>
		);
	}
}

export default MobileHeaderRight;

const Mobileflagcombo = styled.div`
	width: 100%;
	img {
		width: 50%;
		height: auto;
	}
`;
