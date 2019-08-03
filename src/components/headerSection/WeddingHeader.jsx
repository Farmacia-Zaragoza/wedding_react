import React, { Component } from "react";
import WeddingHeaderLeft from "./weddingHeaderLeft/WeddingHeaderLeft";
import WeddingHeaderRight from "./weddingHeaderRight/WeddingHeaderRight";
import styled from "styled-components";

class WeddingHeader extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Headersection>
					<WeddingHeaderLeft />
					<WeddingHeaderRight />
				</Headersection>
			</React.Fragment>
		);
	}
}

export default WeddingHeader;

const Headersection = styled.div`
	height: 15%;
`;
