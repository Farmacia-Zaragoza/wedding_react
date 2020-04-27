import React, { Component } from "react";
import styled from "styled-components";

class LaptopSearchBar extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				{/* <!-- bottom search bar area START --> */}
				<Searchbar className="search-bar-area">
					<section className="search-bar-wrapper">
						<div className="form-group wedding-form">
							<input
								type="text"
								name=""
								id="wedding-search"
								className=""
								placeholder=""
								aria-describedby="helpId"
							/>
							<span>
								<i className="fas fa-search"></i>
							</span>
						</div>
					</section>
				</Searchbar>
				{/* <!-- bottom search bar area END --> */}
			</React.Fragment>
		);
	}
}

export default LaptopSearchBar;

const Searchbar = styled.section`
	position: absolute;
	width: 27%;
	height: 13%;
	top: 71%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	.search-bar-wrapper {
		background-image: url(../../img/hearts/brqx_search_heart_blue_0200_2018.png);
		margin-bottom: 0;
		position: relative;
		height: 100%;
		background-position: center center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		width: 100% !important;
		.wedding-form {
			width: 100%;
			position: initial;
			input {
				position: absolute;
				background-color: #ddd7ca;
				border: 0px;
				padding: 2px 20px 2px 5px;
				width: 11vw;
				height: 3vh;
				transform: translate(-50%, -50%);
				left: 50%;
				top: 44%;
			}
			span {
				position: initial;
				i.fa-search {
					position: absolute;
					top: 50%;
					right: 23%;
					transform: translate(41%, -64%);
					cursor: pointer;
					width: 7%;
					height: 25%;
					font-size: 2.5vh;
				}
			}
		}
	}
`;
