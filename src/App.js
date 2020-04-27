import React from "react";
// React-Socks uses only for responsive components
import Breakpoint, { BreakpointProvider } from "react-socks";
import "./index.css";
import Background from "./components/bodyBackgroundImage/WeddingBackground";
import TabletBackgrond from "./components/bodyBackgroundImage/TabletBackgrond";
import MobileBackground from "./components/bodyBackgroundImage/MobileBackground";
import LaptopBackground from "./components/bodyBackgroundImage/LaptopBackground";

function App() {
	return (
		<BreakpointProvider>
			{/* <Breakpoint mobileS>
				<React.Fragment>
					<MobileBackground />
				</React.Fragment>
			</Breakpoint> */}

			{/* <Breakpoint mobileM>
				<React.Fragment>
					<MobileBackground />
				</React.Fragment>
			</Breakpoint> */}

			<Breakpoint mobileL down>
				<React.Fragment>
					<MobileBackground />
				</React.Fragment>
			</Breakpoint>

			<Breakpoint tabletS>
				<React.Fragment>
					<TabletBackgrond />
				</React.Fragment>
			</Breakpoint>
			<Breakpoint tablet>
				<React.Fragment>
					<TabletBackgrond />
				</React.Fragment>
			</Breakpoint>

			<Breakpoint laptop>
				<React.Fragment>
					<LaptopBackground />
				</React.Fragment>
			</Breakpoint>
			<Breakpoint laptopL>
				{/* this is for test perpous  */}
				<LaptopBackground />
				{/* <div>laptopL: 1440</div> */}
				{/* <Background /> */}
			</Breakpoint>
			<Breakpoint desktop>
				{/* this is for test perpous  */}
				<LaptopBackground />
				{/* <div>desktop: 2560</div> */}
				{/* <Background /> */}
			</Breakpoint>
		</BreakpointProvider>
	);
}

export default App;
