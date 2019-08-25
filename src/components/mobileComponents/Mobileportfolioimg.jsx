import React, { Component } from "react";
import styled from "styled-components";
export class Mobileportfolioimg extends Component {
	render() {
		return (
			<React.Fragment>
				<Mobilefolioimg>
					<img
						className='tablet-content-images'
						src={
							process.env.PUBLIC_URL +
							"/img/parragraphs/brqx_ped09bod_pers_-_Boda_Maribel_y_Ricardo_-_Iglesia_de_Pedrezuela_-_01_de_Mayo_de_2009_-_DSCN0055_3264x2448.jpg"
						}
						alt='wedding left logos'
					/>
				</Mobilefolioimg>
			</React.Fragment>
		);
	}
}

export default Mobileportfolioimg;

const Mobilefolioimg = styled.div`
	img {
		width: 100%;
		height: 100%;
	}
	width: 250px;
	height: 300px;
	background-color: #ddd;
	float: left;
	margin-right: 1rem;
	margin-bottom: 1rem;
`;
