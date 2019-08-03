import React from "react";
// React-Socks uses only for responsive components
import Breakpoint, { BreakpointProvider } from "react-socks";
import "./index.css";

import DesktopBackground from "./components/bodyBackgroundImage/WeddingBackground";

function App() {
	return (
		<BreakpointProvider>
			{/* <React.Fragment>
				<Breakpoint>
					<DesktopBackground />
				</Breakpoint>
			</React.Fragment> */}

			<div>
				<Breakpoint mobileS>
					<div>mobileS 320</div>
				</Breakpoint>

				<Breakpoint mobileM>
					<div>mobileM 375</div>
				</Breakpoint>

				<Breakpoint mobileL>
					<div>mobileL 425</div>
				</Breakpoint>

				<Breakpoint tablet>
					<div>tablet 768</div>
				</Breakpoint>

				<Breakpoint laptop>
					<div>laptop: 1024</div>
				</Breakpoint>
				<Breakpoint laptopL>
					<div>laptopL: 1440</div>
				</Breakpoint>
				<Breakpoint desktop>
					<div>desktop: 2560</div>
				</Breakpoint>
			</div>
		</BreakpointProvider>
	);
}

export default App;
