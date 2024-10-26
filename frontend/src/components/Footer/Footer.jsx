import { withTranslation } from "react-i18next";
import './Footer.css';
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const links = [
	{
		href: 'https://www.instagram.com/filangerimilano/',
		icon: <BsInstagram />,
		name: 'Instagram',
	},
	{
		href: 'https://api.whatsapp.com/send/?phone=%2B393470784741',
		icon: <BsWhatsapp />,
		name: 'Whatsapp',
	},
];

export default withTranslation()(function Footer({ t, vat, vatType, copy }) {
	return (
		<footer className="footer">
			<div className="footer-content boxed">
				<div className="footer-left">
					<div className="footer-logo">
						<img src="LogoSqueeze.png" alt="logo" />
					</div>
				</div>

				<div className="footer-right">
					<div className="footer-links">
						{links.map((link, index) => (
							<div className="footer-link" key={index} onClick={() => window.open(link.href)}>
								{link.icon}
								<p>{t(link.name)}</p>
							</div>
						))}
					</div>
					<div className="spacer-20" />
					<p>{t(vatType)} {vat}</p>
					<p>{`© 2005 - ${new Date().getFullYear()} ${t(copy)}`}</p>
				</div>
			</div>
		</footer >
	);
})
