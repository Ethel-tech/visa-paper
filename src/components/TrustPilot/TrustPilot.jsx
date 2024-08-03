import tp from "../../assets/img/tp.png";

function TrustPilot() {
	return (
		<section className="mt-7 mt-8  flex justify-center align-center w-full">
			<ul className=" flex max-[600px]:flex-col justify-center align-center  text-center h-auto ">
				<li className="p-2  text-center h-auto justify-self-center self-center ">
					<img src={tp} alt="trust pilot" />
				</li>
				<li className="p-16  text-base justify-self-center self-center flex flex-col max-[767px]:block max-[767px]:p-2">
					<span className="text-4xl">1.2M</span>
					<span>happy customers</span>
				</li>
				<li className="p-16  text-base justify-self-center self-centerflex flex-col max-[767px]:block max-[767px]:p-2">
					<span className="text-4xl">10</span>
					<span>years of experience</span>
				</li>
				<li className="p-16  text-base justify-self-center self-center flex flex-col max-[767px]:block max-[767px]:p-2">
					<span className="text-4xl">24/7</span>
					<span>support</span>
				</li>
				<li className="p-16  text-base justify-self-center self-center flex flex-col max-[767px]:block max-[767px]:p-2">
					<span className="text-4xl">98%</span>
					<span>visa approval rate</span>
				</li>
			</ul>
		</section>
	);
}

export default TrustPilot;
