import { setDefaultBreakpoints } from "react-socks";

// REACT-SOCKS LIBRARY FOR RESPONSIVE COMPONENTS
setDefaultBreakpoints([
	{ mobileS: 320 },
	{ mobileM: 375 },
	{ mobileL: 425 },
	{ tabletS: 525 },
	{ tablet: 768 },
	{ laptop: 1024 },
	{ laptopL: 1440 },
	{ desktop: 2560 }
]);

// normal media query for responsiveness(like css media query)
const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px"
};

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`
};
