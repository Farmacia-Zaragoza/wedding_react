import React, { Component } from "react";
import styled from "styled-components";
class LaptopLanguageFlags extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				{/* <!-- language select flag combo START--> */}
				<Flagsection className="lang-select-flag-area">
					<section className="lang-select-flag-combo-wrapper">
						<section className="single-flag-images">
							<span className="flag-combo-1">
								<a href="#" title="Spain">
									<img
										src="./img/heart_flags/brqx_heart_flag_spain_2018_320_200.png"
										alt=""
									/>
								</a>
							</span>
							<span className="flag-combo-2">
								<a href="#" title="Bangladesh">
									<img
										src="./img/heart_flags/brqx_heart_flag_bangladesh_2018_320_200.png"
										alt=""
									/>
								</a>
							</span>
							<span className="flag-combo-3">
								<a href="#" title="Italy">
									<img
										src="./img/heart_flags/brqx_heart_flag_italy_2018_320_200.png"
										alt=""
									/>
								</a>
							</span>
							<span className="flag-combo-4">
								<a href="#" title="China">
									<img
										src="./img/heart_flags/brqx_heart_flag_china_2018_320_200.png"
										alt=""
									/>
								</a>
							</span>
							<span className="flag-combo-5">
								<a href="#" title="India">
									<img
										src="./img/heart_flags/brqx_heart_flag_india_2018_320_200.png"
										alt=""
									/>
								</a>
							</span>
							<span className="flag-combo-6">
								<a href="#" title="Portugal">
									<img
										src="./img/heart_flags/brqx_break_heart_flag_portugal_2018_320_200.png"
										alt=""
									/>
								</a>
							</span>
							<span className="flag-combo-7">
								<a href="#" title="Rusia">
									<img
										src="./img/heart_flags/brqx_break_heart_flag_rusia_2018_320_200.png"
										alt=""
									/>
								</a>
							</span>
						</section>
					</section>
				</Flagsection>
				{/* <!-- language select flag combo END --> */}
			</React.Fragment>
		);
	}
}

export default LaptopLanguageFlags;
const Flagsection = styled.section`
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	top: 79%;
	height: 30%;
	.lang-select-flag-combo-wrapper {
		.single-flag-images {
			.flag-combo-1 {
				a {
					img {
						top: 13%;
						position: absolute;
						width: 10%;
						left: 13%;
						transform: translate(-50%, -50%);
					}
				}
			}
			.flag-combo-2 {
				a {
					img {
						top: 40%;
						position: absolute;
						width: 10%;
						left: 22%;
						transform: translate(-50%, -50%);
					}
				}
			}
			.flag-combo-3 {
				a {
					img {
						top: 68%;
						position: absolute;
						width: 10%;
						left: 33%;
						transform: translate(-50%, -50%);
					}
				}
			}
			.flag-combo-4 {
				a {
					img {
						top: 80%;
						position: absolute;
						width: 10%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				}
			}
			.flag-combo-5 {
				a {
					img {
						top: 68%;
						position: absolute;
						width: 10%;
						right: 23%;
						transform: translate(-50%, -50%);
					}
				}
			}
			.flag-combo-6 {
				a {
					img {
						top: 42%;
						position: absolute;
						width: 10%;
						right: 12%;
						transform: translate(-50%, -50%);
					}
				}
			}
			.flag-combo-7 {
				a {
					img {
						top: 13%;
						position: absolute;
						width: 10%;
						right: 4%;
						transform: translate(-50%, -50%);
					}
				}
			}
		}
	}
`;
