import logo from "../../assets/img/logo.png";
import { Dropdown } from "flowbite-react";
import CustomButton from "../../customs/CustomButton";

const Header = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<header className="w-full flex bg-[#f3f1f1]  text-black ">
			<div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 py-1">
				<div className="flex-grow z-20">
					<a
						href="#"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img className="w-28 h-auto" src={logo} alt="Visa paper logo" />
					</a>
				</div>
				<div
					className="hidden w-full md:block md:w-auto mr-8"
					id="navbar-multi-level"
				>
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>About</li>
					</ul>
				</div>
				<div className="flex gap-7">
					<CustomButton
						btnText={"Login"}
						padding={"6px 20px"}
						borderSolid={"2px"}
						borderColor={"#58b5ef"}
						textColor={"#58b5ef"}
					/>
					<CustomButton
						btnText={"Sign Up"}
						padding={"6px 20px"}
						bgColor={"#58b5ef"}
						textColor={"#fff"}
					/>
				</div>

				<button
					className="lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
						<span
							className={`absolute h-0.5 w-5 bg-[#58b5ef] transform transition duration-300 ease-in-out ${
								navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
							}`}
						></span>
						<span
							className={`absolute h-0.5 bg-[#58b5ef] transform transition-all duration-200 ease-in-out ${
								navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
							}`}
						></span>
						<span
							className={`absolute h-0.5 w-5 bg-[#58b5ef] transform transition duration-300 ease-in-out ${
								navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
							}`}
						></span>
					</div>
				</button>
			</div>
		</header>
	);
};

export default Header;
