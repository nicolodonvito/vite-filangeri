import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import "./AutoSwipe.css";

export default function AutoScroll({ cards }) {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 1200);
		};

		window.addEventListener("resize", handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="auto-swipe boxed">
			<div id="scroller" className="as-container">
				{/* Render the cards once */}
				{cards.map((card, index) => (
					<Card key={index} content={card} />
				))}
				{/* Duplicate cards only on desktop */}
				{isDesktop &&
					cards.map((card, index) => (
						<Card key={index + cards.length} content={card} />
					))}
			</div>
		</div>
	);
}
