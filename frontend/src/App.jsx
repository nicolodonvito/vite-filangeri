import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './i18n.js'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer.jsx'
import { BsWhatsapp } from 'react-icons/bs'
import { withTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { BiArrowToTop } from 'react-icons/bi'
import { t } from 'i18next'

export default withTranslation()(function App({ i18n }) {
	useEffect(() => {
		// Check for a stored language in localStorage
		const storedLanguage = localStorage.getItem('language');

		if (storedLanguage) {
			// If a language is stored, use it
			i18n.changeLanguage(storedLanguage);
		} else {
			// Otherwise, detect the system language and set it as default
			const systemLanguage = navigator.language.split('-')[0]; // Get the language code (e.g., "en", "it", "fr")
			i18n.changeLanguage(systemLanguage);
			localStorage.setItem('language', systemLanguage);
		}
	}, [i18n]);

	// Scroll to the top of the page
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};




	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer
					vatType={t("footer.vat")}
					vat={"123"}
					copy={"footer.copy"}
				/>
			</Router>

			<div className='floating-buttons'>
				{/* Whatsapp Button */}
				<a
					href="https://api.whatsapp.com/send/?phone=%2B393470784741"
					className="floating-button whatsapp-button"
					target="_blank"
					rel="noopener noreferrer"
					title="Open WhatsApp"
				>
					<BsWhatsapp size={24} />
				</a>

				{/* Scroll to Top Button */}
				<button
					onClick={scrollToTop}
					className="floating-button top-button"
					aria-label="Scroll to top"
				>
					<BiArrowToTop size={24} />
				</button>
			</div>
		</div>
	)
})
