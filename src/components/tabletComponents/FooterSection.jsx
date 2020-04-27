import React, { Component } from "react";
import styled from "styled-components";

class FooterSection extends Component {
	render() {
		return (
			<Footercontainer>
				<div className="footer-container">
					<div className="tablet-search-bar">
						<form action="">
							<input type="text" />
						</form>
					</div>
					<div className="social-icon-area">
						<div className="social-image">
							<img
								src={
									process.env.PUBLIC_URL +
									"/img/war_symbols/brqx_cookies_war_050_2017.png"
								}
								alt="wedding left logos"
							/>
						</div>
						<div className="social-image">
							<img
								src={
									process.env.PUBLIC_URL +
									"/img/war_symbols/brqx_cookies_war_050_2017.png"
								}
								alt="wedding left logos"
							/>
						</div>
						<div className="social-image">
							<img
								src={
									process.env.PUBLIC_URL +
									"/img/war_symbols/brqx_cookies_war_050_2017.png"
								}
								alt="wedding left logos"
							/>
						</div>
						<div className="social-image">
							<img
								src={
									process.env.PUBLIC_URL +
									"/img/war_symbols/brqx_cookies_war_050_2017.png"
								}
								alt="wedding left logos"
							/>
						</div>
						<div className="social-image">
							<img
								src={
									process.env.PUBLIC_URL +
									"/img/war_symbols/brqx_cookies_war_050_2017.png"
								}
								alt="wedding left logos"
							/>
						</div>
						<div className="social-image">
							<img
								src={
									process.env.PUBLIC_URL +
									"/img/war_symbols/brqx_cookies_war_050_2017.png"
								}
								alt="wedding left logos"
							/>
						</div>
					</div>
				</div>
			</Footercontainer>
		);
	}
}

export default FooterSection;

const Footercontainer = styled.div`
	.footer-container {
		display: grid;
		grid-template-columns: 30% 70%;
		padding: 1rem 0rem 1rem 1rem;
	}
	.tablet-search-bar input {
		width: 100%;
		height: 30px;
		border: 0px;
		background-color: #ededed;
	}
	.social-icon-area {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		text-align: center;
	}
`;
