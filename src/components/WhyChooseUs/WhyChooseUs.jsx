import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import woman from "../../assets/img/woman-travelling.webp";
import CustomButton from "../../customs/CustomButton";
import {
	faCircleInfo,
	faClockFour,
	faFileCircleCheck,
	faUserShield,
} from "@fortawesome/free-solid-svg-icons";

function WhyChooseUs() {
	return (
		<section className="flex gap-32 px-32 py-4 mt-10 mb-10 max-[767px]:block max-[767px]:w-full max-[767px]:border-2 max-[767px]:px-14">
			<div className="w-5/12 max-[767px]:w-full max-[767px]:border-2">
				<div className="max-[767px]:hidden">
					<img
						className="h-64 w-full rounded-3xl"
						src={woman}
						alt="woman travelling"
					/>
				</div>
				<div className="mt-8">
					<h2 className="text-5xl font-semibold max-[767px]:w-full max-[767px]:text-center">
						Why choose us?
					</h2>
					<p className="mt-8 mb-8 text-base max-[767px]:hidden">
						Find out why we lead the travel document industry enablin travelers
						to fly with ease.
					</p>
					<div className="w-1/2 max-[767px]:hidden">
						<CustomButton
							btnImg
							bgColor={"#58b5ef"}
							textColor={"#fff"}
							btnText={"Apply now"}
							padding={"1rem 2.5rem"}
						/>
					</div>
				</div>
			</div>
			<div className="w-3/6 grid grid-cols-2 gap-10 max-[767px]:block max-[767px]:w-full">
				<div className="px-8 py-14 h-72 text-center content-center max-[767px]:h-auto max-[767px]:py-3 ">
					<div className="max-[767px]:border-b-2 max-[767px]:py-5 max-[767px]:flex max-[767px]:text-left max-[767px]:gap-5">
						<div className="max-[767px]:border-2 max-[767px]:flex max-[767px]:items-center">
							<FontAwesomeIcon icon={faClockFour} className="text-2xl" />
						</div>
						<div>
							<h6 className="text-xl font-semibold mt-2.5 mb-2.5">
								Fast and hassle-free
							</h6>
							<p className="text-sm max-[767px]:pb-5">
								Enjoy a far simpler process than dealing with foreign
								governments.
							</p>
						</div>
					</div>
				</div>
				<div className=" px-8 py-14 h-72 text-center content-center max-[767px]:h-auto max-[767px]:py-0">
					<div className="max-[767px]:border-b-2 max-[767px]:py-5 max-[767px]:flex max-[767px]:text-left max-[767px]:gap-5">
						<div className="max-[767px]:border-2 max-[767px]:flex max-[767px]:items-center">
							<FontAwesomeIcon icon={faUserShield} className="text-2xl" />
						</div>
						<div>
							<h6 className="text-xl font-semibold mt-2.5 mb-2.5">
								Secure and Safe
							</h6>
							<p className="text-sm max-[767px]:pb-5">
								All your information is always protected wit best-in-class
								security.
							</p>
						</div>
					</div>
				</div>
				<div className="px-8 py-12 h-72 text-center content-center max-[767px]:h-auto max-[767px]:py-0">
					<div className="max-[767px]:border-b-2 max-[767px]:py-5 max-[767px]:flex max-[767px]:text-left max-[767px]:gap-5">
						<div className="max-[767px]:border-2 max-[767px]:flex max-[767px]:items-center">
							<FontAwesomeIcon icon={faFileCircleCheck} className="text-2xl" />
						</div>
						<div>
							<h6 className="text-xl font-semibold mt-2.5 mb-2.5">
								Get Approved
							</h6>
							<p className="text-sm max-[767px]:pb-5">
								We have a 98% visa approval rate. Our team are committed to your
								success!
							</p>
						</div>
					</div>
				</div>
				<div className="px-8 py-12 h-72 text-center content-center max-[767px]:h-auto max-[767px]:py-0">
					<div className="max-[767px]:border-b-2 max-[767px]:py-5 max-[767px]:flex max-[767px]:text-left max-[767px]:gap-5">
						<div className="max-[767px]:border-2 max-[767px]:flex max-[767px]:items-center">
							<FontAwesomeIcon icon={faCircleInfo} className="text-2xl" />
						</div>
						<div>
							<h6 className="text-xl font-semibold mt-2.5 mb-2.5">
								Awesome support
							</h6>
							<p className="text-sm max-[767px]:pb-5">
								Dont worry! Our customer support is ready to elp you 24/7.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
