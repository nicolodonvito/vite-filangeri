import { withTranslation } from 'react-i18next';
import './Card.css';

export default withTranslation()(function Card({ t, content }) {
	return (
		<div className="card" style={{ backgroundImage: `url(${content.imageUrl})` }}>
			<div className="card-content">
				<h3>{t(content.title)}</h3>
				<div className="spacer-10" />
				<p>{t(content.description)}</p>
			</div>
		</div>
	)
})
