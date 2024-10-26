import { withTranslation } from "react-i18next"
import "./Hero.css"


export default withTranslation()(function Hero({ t, heroTexts }) {
	return (
		<section className="hero boxed">
			<div className="hero-content">
				<div className="hero-left">
					<h1>{t(heroTexts.title)}</h1>
					<div className="spacer-20" />
					<h3>{t(heroTexts.subtitle)}</h3>
					<div className="spacer-60" />
					<div className="hero-cta">
						<button className="primary-cta">{t(heroTexts.cta1)}</button>
						<button className="secondary-cta">{t(heroTexts.cta2)}</button>
					</div>
				</div>
				<div className="hero-right">
					<img src="eldo-rp.png" alt={t(heroTexts.imageAlt)} />
				</div>
			</div>
		</section>
	)
})
