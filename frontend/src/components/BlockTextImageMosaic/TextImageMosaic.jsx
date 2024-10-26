import { withTranslation } from 'react-i18next';
import "./TextImageMosaic.css";

export default withTranslation()(function TextImageMosaic({ t, texts, images, logo }) {
	return (
		<div className="text-image-mosaic boxed">
			<div className='tim-text-wrapper'>
				{texts.map((text, index) => (
					<div className="tim-text-item" key={index}>
						<p>{t(text)}</p>
					</div>
				))}
			</div>
			<div className="tim-image-wrapper">
				{images.map((image, index) => (
					<div className="tim-image-item" key={index}>
						<img src={image} alt="" />
					</div>
				))}
				{logo && <img src={logo} alt="" className='tim-logo' />}
			</div>
		</div>
	)
})
