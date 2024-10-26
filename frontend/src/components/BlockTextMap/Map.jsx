export default function Map({ source }) {
	return (
		<iframe
			title="map"
			src={source}
			allowFullScreen={true}
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
			className="map"
		/>

	)
}