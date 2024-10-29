import { withTranslation } from "react-i18next"
import "./Heroalt.css"


export default withTranslation()(function Hero({ t, heroTexts }) {
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
						<button className="primary-cta">{t(heroTexts.cta1)}</button>
						<button className="secondary-cta">{t(heroTexts.cta2)}</button>
					</div>
				</div>
			</div>
		</section>
	)
})
