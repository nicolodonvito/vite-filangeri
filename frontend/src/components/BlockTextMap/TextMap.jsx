import { withTranslation } from "react-i18next"
import Map from "./Map"
import "./TextMap.css"


export default withTranslation()(function TextMap({ t, texts, location }) {
	return (
		<div className="text-map boxed">
			<div className="tm-text-wrapper">
				{texts.map((text, index) => (
					<div className="tm-text-item" key={index}>
						<p>{t(text)}</p>
					</div>
				))}
			</div>
			<Map source={location} />
		</div>
	)
})