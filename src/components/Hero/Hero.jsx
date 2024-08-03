import CustomButton from "../../customs/CustomButton";
import CustomInput from "../../customs/CustomInput";
import "./hero.scss";

function Hero() {
	return (
		<section className="hero p-20 h-screen w-full max-[767px]:p-10">
			<div className="flex flex-col gap-20 max-[767px]:gap-12">
				<div className=" w-1/2 max-[767px]:w-full">
					<h1 className="font-bold text-5xl leading-10 mb-6 max-[767px]:text-4xl">
						The easiest way to get your travel visa
					</h1>
					<h2 className="text-2xl max-[767px]:hidden">
						Let us help you get your visa for any country in the world.
					</h2>
				</div>
				<form className="flex  gap-5 bg-[#f3f1f1] rounded-3xl opacity-85 p-8 md:block max-[767px]:block">
					<div className="flex  basis-3/4 gap-4 max-[767px]:block">
						<CustomInput
							label={"Where am I From?"}
							name={"country"}
							options={[
								{ label: "Australia -AU", value: "nigeria" },
								{ label: "Canada-CA", value: "canada" },
								{ label: "Germany - DE", value: "germany" },
								{ label: "Spain - ES", value: "spain" },
								{ label: "United Kingdom - GB", value: "uk" },
							]}
						/>
						<CustomInput
							label={"Where am I Going?"}
							name={"country"}
							options={[
								{ label: "Australia -AU", value: "nigeria" },
								{ label: "Canada-CA", value: "canada" },
								{ label: "Germany - DE", value: "germany" },
								{ label: "Spain - ES", value: "spain" },
								{ label: "United Kingdom - GB", value: "uk" },
							]}
						/>
					</div>

					<div className=" w-auto w-full basis-1/4 pt-3">
						<CustomButton
							btnText={"Get Started!"}
							padding={"1rem 2.5rem"}
							bgColor={"#58b5ef"}
							textColor={"fff"}
						/>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Hero;
