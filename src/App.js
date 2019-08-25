import React from "react";
// React-Socks uses only for responsive components
import Breakpoint, { BreakpointProvider } from "react-socks";
import "./index.css";

import Background from "./components/bodyBackgroundImage/WeddingBackground";
import TabletBackgrond from "./components/bodyBackgroundImage/TabletBackgrond";
import MobileBackground from "./components/bodyBackgroundImage/MobileBackground";

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
					<Background />
				</React.Fragment>
			</Breakpoint>
			<Breakpoint laptopL>
				<div>laptopL: 1440</div>
			</Breakpoint>
			<Breakpoint desktop>
				<div>desktop: 2560</div>
			</Breakpoint>
		</BreakpointProvider>
	);
}

export default App;
