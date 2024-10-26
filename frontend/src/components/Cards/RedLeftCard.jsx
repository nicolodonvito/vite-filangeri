import { withTranslation } from "react-i18next";
import './RedLeftCard.css';

export default withTranslation()(function RedLeftCard({ t, content }) {
	return (
		<div className="red-left-card">
			<div className="rlc-content">
				<div className="rlc-header">
					{content.icon}
					<h3>{t(content.title)}</h3>
				</div>

				<div className="spacer-10" />

				{content.descriptions.map((desc, index) => (
					<div key={index} className="rlc-description">
						<p>{t(desc.text)}{desc.detail}</p>
					</div>
				))}
				
				{content.description && <p>{t(content.description)}</p>}
			</div>
		</div>
	);
});
