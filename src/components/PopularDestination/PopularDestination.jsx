import tajmahaj from "../../assets/img/tajmahaj.webp";
import colombia from "../../assets/img/colombia.webp";
import australia from "../../assets/img/australia.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import "./popular-destination.scss";

function PopularDestination() {
	return (
		<section className="px-32 py-4 mt-32 max-[767px]:px-10 max-[767px]:py-0 max-[767px]:mt-20">
			<div className="w-full text-center">
				<h2 className="text-5xl font-semibold">Most Popular Destinations</h2>
				<p className="text-xl mt-8 mb-8">
					Check out our customers&#39; most frequented travel destinations
				</p>
			</div>

			<div className="flex w-full gap-10 mt-16 max-[767px]:overflow-scroll max-[767px]:flex-nowrap max-[767px]:border-2 max-[767px]:gap-5 max-[767px]:w-full">
				<figure className="h-full w-1/3 max-[767px]:basis-9/12 relative">
					<img
						className="object-cover h-96 w-full rounded-t-3xl "
						src={tajmahaj}
						alt="the Taj Mahaj"
					/>
					<figcaption className="px-5 py-4 h-full rounded-b-3xl bg-[#58b5ef] opacity-100">
						<h3 className="text-2xl text-white font-extrabold">India</h3>
						<div className="text-sm">
							<span className="text-[#21238d]-400">
								<FontAwesomeIcon icon={faUserGroup} />
							</span>
							<span className="text-white">+162,750 processed Visas</span>
						</div>
					</figcaption>
				</figure>

				<figure className="h-full w-1/3 max-[767px]:basis-9/12">
					<img
						className="object-cover h-96 w-full rounded-t-3xl"
						src={colombia}
						alt="the Taj Mahaj"
					/>
					<figcaption className="rounded-b-3xl px-5 py-4 h-full bg-[#58b5ef] opacity-100">
						<h3 className="text-2xl text-white font-extrabold">India</h3>
						<div className="text-sm">
							<span className="text-[#21238d]-400">
								<FontAwesomeIcon icon={faUserGroup} />
							</span>
							<span className="text-white">+162,750 processed Visas</span>
						</div>
					</figcaption>
				</figure>
				<figure className="h-full w-1/3 max-[767px]:w-9/12">
					<img
						className="object-cover h-96 w-full rounded-t-3xl"
						src={australia}
						alt="the Taj Mahaj"
					/>
					<figcaption className="rounded-b-3xl px-5 py-4 h-full bg-[#58b5ef] opacity-100">
						<h3 className="text-2xl text-white font-extrabold">India</h3>
						<div className="text-sm">
							<span className="text-[#21238d]-400">
								<FontAwesomeIcon icon={faUserGroup} />
							</span>
							<span className="text-white">+162,750 processed Visas</span>
						</div>
					</figcaption>
				</figure>
			</div>
			{/* <div className="flex test">
				<div>
					<div>
						<img src={colombia} alt="" />
					</div>
					<div>
						<h3>India</h3>
						<p>Processed Visa</p>
					</div>
				</div>
				<div>
					<div>
						<img src={colombia} alt="" />
					</div>
					<div>
						<h3>India</h3>
						<p>Processed Visa</p>
					</div>
				</div>
				<div>
					<div>
						<img src={colombia} alt="" />
					</div>
					<div>
						<h3>India</h3>
						<p>Processed Visa</p>
					</div>
				</div>
			</div> */}
		</section>
	);
}

export default PopularDestination;
