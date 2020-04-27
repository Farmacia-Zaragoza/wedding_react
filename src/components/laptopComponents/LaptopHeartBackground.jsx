import React, { Component } from "react";
import styled from "styled-components";
import Rebone from "./Rebone";
import LaptopArrow from "./LaptopArrow";
import LaptopMenu from "./LaptopMenu";
import LaptopTextContent from "./LaptopTextContent";
import SocialIcons from "./SocialIcons";
import LaptopTabMenus from "./LaptopTabMenus";
import LaptopLanguageFlags from "./LaptopLanguageFlags";
import LaptopSearchBar from "./LaptopSearchBar";
import LaptopDropdownMenu from "./LaptopDropdownMenu";

class LaptopHeartBackground extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Laptopheart className="laptop-heart">
					{/* 4 rebone for laptop  */}
					<Rebone />
					{/* laptop 2 arrows left and right  */}
					<LaptopArrow />
					{/* laptop menu slider area 2 menus, left and right*/}
					<LaptopMenu />
					{/* dropdown menu place  
                    --------------------------
                    */}
					<LaptopDropdownMenu />
					{/* Laptop text container area  */}
					<LaptopTextContent />
					{/* laptop social icons  */}
					<SocialIcons />
					{/* laptop tab menu for content 4 menu-items */}
					<LaptopTabMenus />

					{/* laptop language select flags section  6 FLAGS */}
					<LaptopLanguageFlags />
					{/* laptop search bar area  */}
					<LaptopSearchBar />
				</Laptopheart>
			</React.Fragment>
		);
	}
}

export default LaptopHeartBackground;

const Laptopheart = styled.div`
	width: 80%;
	height: 80%;
	background-image: url("img/hearts/brqx_heart_pink_yellow_0800_2018.png");
	background-repeat: no-repeat;
	background-size: contain;
	background-position: 50% 50%;
	margin: 0 auto;
	position: relative;
`;
