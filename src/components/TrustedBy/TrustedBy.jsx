import iberia from "../../assets/img/iberia.webp";

function TrustedBy() {
	return (
		<section className="px-32 py-4 mt-32 mb-16 max-[767px]:p-10">
			<div className="w-full text-center">
				<h2 className="text-5xl font-semibold">Trusted by Globalo Brands</h2>
				<p className="text-xl mt-8 mb-8">
					Check out our customers&#39; most frequented travel destinations
				</p>
			</div>
			<div className="grid grid-cols-4 grid-rows-2 gap-8">
				<img src={iberia} alt="Iberia Logo" className="w-44 h-10" />
				<img src={iberia} alt="Iberia Logo" className="w-44 h-10" />
				<img src={iberia} alt="Iberia Logo" className="w-44 h-10" />
				<img src={iberia} alt="Iberia Logo" className="w-44 h-10" />
				<img src={iberia} alt="Iberia Logo" className="w-44 h-10" />
				<img src={iberia} alt="Iberia Logo" className="w-44 h-10" />
				<img src={iberia} alt="Iberia Logo" className="w-44 h-10" />
				<img src={iberia} alt="Iberia Logo" className="w-44 h-10" />
			</div>
		</section>
	);
}

export default TrustedBy;
