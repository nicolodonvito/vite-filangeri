import { withTranslation } from "react-i18next";
import "./Section.css";

export default withTranslation()(function Section({ t, sectionId, title, component }) {
	return (
		<section className="section boxed" id={sectionId}>
			{title && <h2>{t(title)}</h2>}
			<div className="spacer-10" />
			{component && <component.type {...component.props} />}
		</section>
	);
});
