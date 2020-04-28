import React, { Component } from "react";
import styled from "styled-components";
class LaptopArrow extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Laptoparrows className="laptop-arrows">
					<div className="laptop-arrow-left">
						<img
							src="img/arrows/brqx_wed_arrow_left_0200_2018.png"
							alt="laptop menus arrows"
						/>
					</div>
					<div className="laptop-arrow-right">
						<img
							src="img/arrows/brqx_wed_arrow_right_0200_2018.png"
							alt="laptop menus arrows"
						/>
					</div>
				</Laptoparrows>
			</React.Fragment>
		);
	}
}

export default LaptopArrow;

const Laptoparrows = styled.div`
	position: absolute;
	width: 100%;
	margin: 0 auto;
	top: 7%;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	transform: translate(0%, -50%);
	.laptop-arrow-left {
		position: relative;
		width: 15%;
		left: 50%;
		transform: translate(-140%);
		background-color: transparent;
		img {
			width: 100%;
		}
	}
	.laptop-arrow-right {
		position: relative;
		width: 15%;
		right: 50%;
		transform: translate(140%);
		background-color: transparent;
		img {
			width: 100%;
		}
	}
`;
