const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<nav
			className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-gray-900 transform delay-100 transition-all duration-300 ${
				navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
			}`}
		>
			<ul className="flex flex-col items-start">
				<li className="nav-li flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
					<a
						href="/"
						className="nav-link"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						Home
					</a>
				</li>
				<li className="nav-li">
					<a
						href="/"
						className="nav-link h-full w-full py-2 text-lg text-white"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						About
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default MenuOverlay;
