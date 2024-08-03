import { useState } from "react";
import Header from "./Header";
import MenuOverlay from "./MenuOverlays";

function Navigation() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<div className="w-full z-20">
			<Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
			<MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
		</div>
	);
}

export default Navigation;
