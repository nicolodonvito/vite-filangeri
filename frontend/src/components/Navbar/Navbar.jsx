import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withTranslation } from 'react-i18next';
import './Navbar.css';
import { IoChevronForward } from "react-icons/io5";

const links = [
	{ path: '/#top', label: 'header.home', icon: <IoChevronForward /> },
	{ path: '/#about', label: 'header.about', icon: <IoChevronForward /> },
	{ path: '/#contacts', label: 'header.contacts', icon: <IoChevronForward /> },
];

const languages = [
	{ code: 'it', label: 'Italiano', icon: 'it.png' },
	{ code: 'en', label: 'English', icon: 'gb.png' },
	{ code: 'de', label: 'Deutsch', icon: 'de.png' },
];

export default withTranslation()(function Navbar({ t, i18n }) {
	const [isOpen, setIsOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [visible, setVisible] = useState(true); // State to manage navbar visibility
	const [lastScrollY, setLastScrollY] = useState(0); // State to keep track of last scroll position

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
				document.body.style.overflow = 'auto';
				document.documentElement.style.overflow = 'auto';
				document.documentElement.classList.remove('menu-open');
				document.body.classList.remove('menu-open');
			}
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isOpen]);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Check scroll direction
			if (currentScrollY > lastScrollY) {
				// Scrolling down
				setVisible(false);
			} else {
				// Scrolling up
				setVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);

	const handleLanguageChange = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('language', lng);
		setDropdownOpen(false);
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		if (!isOpen) {
			document.documentElement.classList.add('menu-open');
			document.body.classList.add('menu-open');
		} else {
			document.documentElement.classList.remove('menu-open');
			document.body.classList.remove('menu-open');
		}
	};

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	// Custom scroll function to add offset
	const scrollWithOffset = (el) => {
		const offset = 70; // Customize this value as needed
		const elementPosition = el.getBoundingClientRect().top + window.scrollY;
		window.scroll({
			top: elementPosition - offset,
			left: 0,
			behavior: 'smooth'
		});
	};

	return (
		<>
			<nav className={`navbar ${isOpen ? 'open' : ''} ${visible ? '' : 'hidden'}`}>
				<div className="boxed navbar-content">
					<div className='navbar-desktop'>
						<div className="navbar-left">
							<Link to="/#top">
								<img src="LogoSqueeze.png" alt="Logo Filangeri" className="navbar-logo" />
							</Link>
							<div className="nav-links">
								{links.map((link) => (
									<Link
										key={link.path}
										to={link.path}
										scroll={el => scrollWithOffset(el)} // Use the custom scroll function
										className="nav-button"
									>
										<span>{t(link.label)}</span>
									</Link>
								))}
							</div>
						</div>
						<div className="navbar-right">
							<div className="language-selector" onClick={toggleDropdown}>
								{languages.map((lang) => (
									<div key={lang.code} onClick={() => handleLanguageChange(lang.code)} title={lang.label} className='language'>
										<img src={"icons/" + lang.icon} alt={lang.label} className='flag' />
									</div>
								))}
							</div>
							<div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
								<span className="bar"></span>
								<span className="bar"></span>
								<span className="bar"></span>
							</div>
						</div>
					</div>
				</div>
				{isOpen && (
					<div className="mobile-menu">
						<div>
							<h2>{t('header.pages')}</h2>
							<br />
							<div className='mobile-pages'>
								{links.map((link) => (
									<Link
										key={link.path}
										to={link.path}
										scroll={el => scrollWithOffset(el)}
										className="mobile-nav-button"
										onClick={toggleMenu}
									>
										{link.icon}
										{t(link.label)}
									</Link>
								))}
							</div>
						</div>
						<div className="mobile-language-selector">
							<h2>{t('header.language')}</h2>
							<br />
							<div className='mobile-languages'>
								{languages.map((lang) => (
									<div key={lang.code} onClick={() => handleLanguageChange(lang.code)} className='language'>
										<img src={"icons/" + lang.icon} alt={lang.label} />
										{t(lang.label)}
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</nav>
			<div className='spacer-80' />
		</>
	);
});
