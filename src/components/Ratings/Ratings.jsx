import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating, RatingStar } from "flowbite-react";

function Ratings() {
	return (
		<section className="flex gap-8 px-32 py-4 mt-20 max-[767px]:block max-[767px]:p-10">
			<div>
				<h2 className="text-5xl font-semibold leading-10 mb-3">
					Our Customers
				</h2>
				<p className="text-xl ">Discover our travelers&#39; experiences</p>
			</div>
			<div className="flex gap-8">
				<div>
					<FontAwesomeIcon icon={faQuoteLeft} className="h-6 w-6" />
					<blockquote>
						I never would have been able to navigate the application withoput
						the help of iVisa. The speed at which they processed the documents
						was amazing.
					</blockquote>
					<div className="text-sm">
						<p className="font-bold">Kathryn Hughes</p>
						<p>3 days ago</p>
					</div>

					<Rating>
						<RatingStar fill="#ffe234" />
						<RatingStar fill="#ffe234" />
						<RatingStar fill="#ffe234" />
						<RatingStar fill="#ffe234" />
						<RatingStar filled={false} />
					</Rating>
				</div>
				<div>
					<FontAwesomeIcon icon={faQuoteLeft} className="h-6 w-6" />
					<blockquote>
						I never would have been able to navigate the application withoput
						the help of iVisa. The speed at which they processed the documents
						was amazing.
					</blockquote>
					<div className="text-sm">
						<p className="font-bold">Kathryn Hughes</p>
						<p>3 days ago</p>
					</div>

					<Rating>
						<RatingStar fill="#ffe234" />
						<RatingStar fill="#ffe234" />
						<RatingStar fill="#ffe234" />
						<RatingStar fill="#ffe234" />
						<RatingStar filled={false} />
					</Rating>
				</div>
				<div>
					<FontAwesomeIcon icon={faQuoteLeft} className="h-6 w-6" />
					<blockquote>
						I never would have been able to navigate the application withoput
						the help of iVisa. The speed at which they processed the documents
						was amazing.
					</blockquote>
					<div className="text-sm">
						<p className="font-bold">Kathryn Hughes</p>
						<p>3 days ago</p>
					</div>

					<Rating>
						<RatingStar fill="#ffe234" />
						<RatingStar fill="#ffe234" />
						<RatingStar fill="#ffe234" />
						<RatingStar fill="#ffe234" />
						<RatingStar filled={false} />
					</Rating>
				</div>
			</div>
		</section>
	);
}

export default Ratings;
