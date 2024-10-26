import { withTranslation } from "react-i18next";
import RedLeftCard from "../Cards/RedLeftCard";
import './TextCards.css';

export default withTranslation()(function TextCards({ t, texts }) {
	const { textParagraph, cardContent } = texts;

	return (
		<div className="text-cards">
			{/* Top part: Renders the paragraphs from textParagraph */}
			<div className="text-cards-top">
				{textParagraph.map((paragraph, index) => (
					<div className="text-card" key={index}>
						<div className="spacer-10" />
						<p>{t(paragraph)}</p>
					</div>
				))}
			</div>

			{/* Bottom part: Renders the cardContent using RedLeftCard */}
			<div className="text-cards-bottom">
				{cardContent.map((content, index) => (
					<RedLeftCard key={index} content={content} />
				))}
			</div>
		</div>
	);
});
