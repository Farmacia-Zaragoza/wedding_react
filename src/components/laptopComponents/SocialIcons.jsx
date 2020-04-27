import React, { Component } from "react";
import styled from "styled-components";

class SocialIcons extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Socialicons className="social-icons-wrapper">
					<div className="social-icons">
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
					</div>
				</Socialicons>
			</React.Fragment>
		);
	}
}

export default SocialIcons;

const Socialicons = styled.section`
	top: 39%;
	position: absolute;
	transform: translate(-50%, -50%);
	left: 25%;
	width: 3%;
	.social-icons {
		ul {
			li {
				list-style: none;
				a {
					display: block;
					width: 100%;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
`;
