import React, { Component } from "react";
import styled from "styled-components";

class MobileHeaderLeft extends Component {
	render() {
		return (
			<React.Fragment>
				<MobileLogo>
					<img
						src="img/logos/brqx_logo_01_ricardo_y_maribel_0100_2018.png"
						alt="wedding left logos"
					/>
				</MobileLogo>
			</React.Fragment>
		);
	}
}

export default MobileHeaderLeft;

const MobileLogo = styled.div`
	width: 100%;
	display: block;
	img {
		width: 100%;
	}
`;
