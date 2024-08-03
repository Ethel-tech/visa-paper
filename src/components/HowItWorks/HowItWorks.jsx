import woman from "../../assets/img/woman-holding-visa.webp";
import { Tabs } from "flowbite-react";
import CustomButton from "../../customs/CustomButton";

function HowItWorks() {
	return (
		<section className="px-32 py-4 mt-32 max-[767px]:p-10 max-[767px]:mt-20">
			<div className="w-full text-center">
				<h2 className="text-5xl font-semibold">How it Works</h2>
				<p className="text-xl mt-8 mb-8">
					Learn more about the process of each kind of Visa we can help you
					apply for
				</p>
			</div>

			<Tabs
				aria-label="Tabs with underline"
				style="underline"
				variant="underline"
				className="-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700"
			>
				<Tabs.Item active title="Electronic visa (e-visa)">
					<div className="flex gap-10 justify-center mt-14">
						<div>
							<div className="flex gap-6 h-fit items-center mb-8">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="flex gap-6  h-fit items-center mb-8">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="flex gap-6  h-fit items-center">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="mt-16">
								<CustomButton
									btnText={"Learn More"}
									padding={"10px"}
									bgColor={"#58b5ef"}
									textColor={"#fff"}
								/>
							</div>
						</div>
						<div className="max-[767px]:hidden">
							<img
								className="rounded-lg h-auto max-w-full float-right"
								src={woman}
								alt="Woman holding visa"
							/>
						</div>
					</div>
				</Tabs.Item>
				<Tabs.Item title="e-Visa on Arrival">
					<div className="flex gap-10 justify-center mt-14">
						<div>
							<div className="flex gap-6  h-fit items-center mb-8">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="flex gap-6  h-fit items-center mb-8">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="flex gap-6  h-fit items-center">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="mt-16">
								<CustomButton
									btnText={"Learn More"}
									padding={"10px"}
									bgColor={"#58b5ef"}
									textColor={"#fff"}
								/>
							</div>
						</div>
						<div className="max-[767px]:hidden">
							<img
								className="rounded-lg h-auto max-w-full float-right"
								src={woman}
								alt="Woman holding visa"
							/>
						</div>
					</div>
				</Tabs.Item>
				<Tabs.Item title="Health Declaration">
					<div className="flex gap-10 justify-center mt-14">
						<div>
							<div className="flex gap-6  h-fit items-center mb-8">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="flex gap-6  h-fit items-center mb-8">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="flex gap-6  h-fit items-center">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="mt-16">
								<CustomButton
									btnText={"Learn More"}
									padding={"10px"}
									bgColor={"#58b5ef"}
									textColor={"#fff"}
								/>
							</div>
						</div>
						<div className="max-[767px]:hidden">
							<img
								className="rounded-lg h-auto max-w-full float-right"
								src={woman}
								alt="Woman holding visa"
							/>
						</div>
					</div>
				</Tabs.Item>
				<Tabs.Item title="Guided Visa">
					<div className="flex gap-10 justify-center mt-14">
						<div>
							<div className="flex gap-6  h-fit items-center mb-8">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="flex gap-6  h-fit items-center mb-8">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="flex gap-6  h-fit items-center">
								<div className="bg-[#e7eeef] rounded-full  h-20 w-20 flex justify-center items-center text-center">
									<p className="text-center text-5xl font-semibold">01</p>
								</div>
								<div className="flex flex-col  h-fit">
									<h2 className="font-bold text-2xl mb-0.5">
										Fill out online application
									</h2>
									<p className="text-sm">
										Complete our easy online application and pay with credit
										card or Paypal
									</p>
								</div>
							</div>
							<div className="mt-16">
								<CustomButton
									btnText={"Learn More"}
									padding={"10px"}
									bgColor={"#58b5ef"}
									textColor={"#fff"}
								/>
							</div>
						</div>
						<div className="max-[767px]:hidden">
							<img
								className="rounded-lg h-auto max-w-full float-right"
								src={woman}
								alt="Woman holding visa"
							/>
						</div>
					</div>
				</Tabs.Item>
			</Tabs>
		</section>
	);
}

export default HowItWorks;
