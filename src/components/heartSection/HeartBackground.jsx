import React, { Component } from "react";
import styled from "styled-components";
import { device } from "./../devices/Devices";
import Rebone from "../laptopComponents/Rebone";
import TextContents from "../Common/TextContents";
// import TextContents from "./../Common/TextContents";

class HeartBackground extends Component {
	state = {};
	render() {
		return (
			<Heartbackground>
				<Rebone />
				<section id="wedding-heart-container">
					{/* <!-- wedding  menu container start --> */}
					<section class="wedding-menu-container">
						{/* <!-- left arrow --> */}
						<img
							class="wedding-menu-left-icon left-arrow"
							src="img/arrows/brqx_wed_arrow_left_0200_2018.png"
							alt=""
						/>
						{/* <!-- right arrow --> */}
						<img
							class="wedding-menu-right-icon right-arrow"
							src="img/arrows/brqx_wed_arrow_right_0200_2018.png"
							alt=""
						/>
						{/* <!-- main-menu --> */}
						<section class="wedding-menu-left">
							<ul class="menu-left">
								<li>
									<a href="#">item 01</a>
								</li>
								<li>
									<a href="#">item 02</a>
								</li>
								<li>
									<a href="#">item 03</a>
								</li>
								<li>
									<a href="#">item 04</a>
								</li>
								<li>
									<a href="#">item 05</a>
								</li>
								<li>
									<a href="#">item 06</a>
								</li>
								<li>
									<a href="#">item 07</a>
								</li>
								<li>
									<a href="#">item 08</a>
								</li>
								<li>
									<a href="#">item 09</a>
								</li>
								<li>
									<a href="#">item 10</a>
								</li>
								<li>
									<a href="#">item 11</a>
								</li>
								<li>
									<a href="#">item 12</a>
								</li>
								<li>
									<a href="#">item 13</a>
								</li>
								<li>
									<a href="#">item 14</a>
								</li>
							</ul>
						</section>

						<section class="wedding-menu-right">
							<ul class="menu-right">
								<li>
									<a href="#">item 04</a>
								</li>
								<li>
									<a href="#">item 05</a>
								</li>
								<li>
									<a href="#">item 06</a>
								</li>
								<li>
									<a href="#">item 07</a>
								</li>
								<li>
									<a href="#">item 08</a>
								</li>
								<li>
									<a href="#">item 09</a>
								</li>
								<li>
									<a href="#">item 10</a>
								</li>
								<li>
									<a href="#">item 11</a>
								</li>
								<li>
									<a href="#">item 12</a>
								</li>
								<li>
									<a href="#">item 13</a>
								</li>
								<li>
									<a href="#">item 14</a>
								</li>
								<li>
									<a href="#">item 15</a>
								</li>
								<li>
									<a href="#">item 16</a>
								</li>
								<li>
									<a href="#">item 17</a>
								</li>
							</ul>
						</section>
					</section>
					{/* <!-- wedding menu container END --> */}

					{/* <!-- wedding sub-menu container START --> */}
					<section class="wedding-sub-menu-container">
						<span class="ascerisk ascerisk-btn-left">
							<button>
								<img
									src="img/war_symbols/brqx_ascerisk_war_050_2017.png"
									alt=""
								/>
							</button>
						</span>

						<span class="ascerisk ascerisk-btn-right">
							<button>
								<img
									src="img/war_symbols/brqx_ascerisk_war_050_2017.png"
									alt=""
								/>
							</button>
						</span>
					</section>

					{/* <!-- wedding sub-menu container END --> */}

					{/* <!-- left social-icon area START --> */}
					<section class="social-media-icon-left">
						<section class="social-media-icon-wrapper">
							<ul>
								<li>
									<a href="#">
										<img
											src="img/war_symbols/brqx_cookies_war_050_2017.png"
											alt="brqx_cookies_war_050_2017-logo"
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<img
											src="img/war_symbols/brqx_information_war_050_2017.png"
											alt="brqx_information_war_050_2017-logo"
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<img
											src="img/war_symbols/brqx_facebook_war_050_2017.png"
											alt="brqx_facebook_war_050_2017-logo"
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<img
											src="img/war_symbols/brqx_google_plus_war_050_2017.png"
											alt="brqx_google_plus_war_050_2017-logo"
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<img
											src="img/war_symbols/brqx_linkedin_war_050_2017.png"
											alt="brqx_linkedin_war_050_2017-logo"
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<img
											src="img/war_symbols/brqx_twitter_war_050_2017.png"
											alt="brqx_twitter_war_050_2017-logo"
										/>
									</a>
								</li>
							</ul>
						</section>
					</section>
					{/* <!-- left social-icon area END --> */}

					{/* <!-- main conainer pages START --> */}
					<div class="scroll-outer-container">
						<div class="scroll-inner-container">
							<div
								id="tab-1"
								class="social-image-area tab-content current"
							>
								<img
									src="img/parragraphs/brqx_ped09bod_pers_-_Boda_Maribel_y_Ricardo_-_Iglesia_de_Pedrezuela_-_01_de_Mayo_de_2009_-_DSCN0055_3264x2448.jpg"
									align="left"
									alt="dbrqx solical image page"
								/>
								<h1>NOVIA-1</h1>
								<TextContents />
							</div>
							<div
								id="tab-2"
								class="social-image-area tab-content"
							>
								<img
									src="img/parragraphs/brqx_ped09bod_pers_-_Boda_Maribel_y_Ricardo_-_Iglesia_de_Pedrezuela_-_01_de_Mayo_de_2009_-_DSCN0055_3264x2448.jpg"
									align="left"
									alt="dbrqx solical image page"
								/>
								<h1>NOVIA-2</h1>
								<TextContents />
							</div>
							<div
								id="tab-3"
								class="social-image-area tab-content"
							>
								<img
									src="img/parragraphs/brqx_ped09bod_pers_-_Boda_Maribel_y_Ricardo_-_Iglesia_de_Pedrezuela_-_01_de_Mayo_de_2009_-_DSCN0055_3264x2448.jpg"
									align="left"
									alt="dbrqx solical image page"
								/>
								<h1>NOVIA-3</h1>
								<TextContents />
							</div>
						</div>
					</div>
					{/* <!-- main conainer pages END --> */}

					{/* <!-- bottom search bar area START --> */}
					<section class="search-bar-area">
						<section class="search-bar-wrapper">
							<div class="form-group wedding-form">
								<input
									type="text"
									name=""
									id="wedding-search"
									class=""
									placeholder=""
									aria-describedby="helpId"
								/>
								<span>
									<i class="fas fa-search"></i>
								</span>
							</div>
						</section>
					</section>
					{/* <!-- bottom search bar area END --> */}

					{/* <!-- language select flag combo START--> */}
					<section class="lang-select-flag-combo">
						<section class="lang-select-flag-combo-wrapper">
							<section class="single-flag-images">
								<span class="flag-combo-1">
									<a href="#" title="Spain">
										<img
											src="img/heart_flags/brqx_heart_flag_spain_2018_320_200.png"
											alt=""
										/>
									</a>
								</span>
								<span class="flag-combo-2">
									<a href="#" title="Bangladesh">
										<img
											src="img/heart_flags/brqx_heart_flag_bangladesh_2018_320_200.png"
											alt=""
										/>
									</a>
								</span>
								<span class="flag-combo-3">
									<a href="#" title="Italy">
										<img
											src="img/heart_flags/brqx_heart_flag_italy_2018_320_200.png"
											alt=""
										/>
									</a>
								</span>
								<span class="flag-combo-4">
									<a href="#" title="China">
										<img
											src="img/heart_flags/brqx_heart_flag_china_2018_320_200.png"
											alt=""
										/>
									</a>
								</span>
								<span class="flag-combo-5">
									<a href="#" title="India">
										<img
											src="img/heart_flags/brqx_heart_flag_india_2018_320_200.png"
											alt=""
										/>
									</a>
								</span>
								<span class="flag-combo-6">
									<a href="#" title="Portugal">
										<img
											src="img/heart_flags/brqx_break_heart_flag_portugal_2018_320_200.png"
											alt=""
										/>
									</a>
								</span>
								<span class="flag-combo-7">
									<a href="#" title="Rusia">
										<img
											src="img/heart_flags/brqx_break_heart_flag_rusia_2018_320_200.png"
											alt=""
										/>
									</a>
								</span>
							</section>
						</section>
					</section>
					{/* <!-- language select flag combo END --> */}
				</section>
			</Heartbackground>
		);
	}
}

export default HeartBackground;

const Heartbackground = styled.div`
	width: 80%;
	height: inherit;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: 50% 50%;
	margin: 0 auto;
	position: relative;
	max-height: 80%;
	background-image: url("img/hearts/brqx_heart_pink_yellow_0800_2018.png");
	@media ${device.mobileS} {
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
		/* background image for laptop and above devices  */
	}
	@media ${device.laptopL} {
	}
	@media ${device.desktop} {
	}
	@media ${device.desktopL} {
	}
`;
