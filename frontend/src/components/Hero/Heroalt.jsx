import { withTranslation } from "react-i18next"
import { HashLink as Link } from 'react-router-hash-link';

import "./Heroalt.css"


export default withTranslation()(function Hero({ t, heroTexts }) {

	// Custom scroll function to add offset
	const scrollWithOffset = (el) => {
		const offset = 70; // Customize this value as needed
		const elementPosition = el.getBoundingClientRect().top + window.scrollY;
		window.scroll({
			top: elementPosition - offset,
			left: 0,
			behavior: 'smooth'
		});
	};

	return (
		<section className="hero wide">
			<div className="hero-content">
				<div className="hero-image-container">
					<img src={heroTexts.heroImage} alt={t(heroTexts.imageAlt)} />
				</div>
				<div className="hero-description-container">
					<h1>{t(heroTexts.title)}</h1>
					<div className="spacer-20" />
					<h3>{t(heroTexts.subtitle)}</h3>
					<div className="spacer-40" />
					<div className="hero-cta">
						<Link
							to={heroTexts.linkcta1}
							scroll={el => scrollWithOffset(el)}
							className="primary-cta">
							{t(heroTexts.cta1)}
						</Link>

						<Link
							to={heroTexts.linkcta2}
							scroll={el => scrollWithOffset(el)}
							className="secondary-cta">
							{t(heroTexts.cta2)}
						</Link>
						{/* <button className="primary-cta">{t(heroTexts.cta1)}</button>
						<button className="secondary-cta">{t(heroTexts.cta2)}</button> */}
					</div>
				</div>
			</div>
		</section>
	)
})
