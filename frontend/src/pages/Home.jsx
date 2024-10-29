import AutoSwipe from "../components/AutoSwipe/AutoSwipe";
import TextImageMosaic from "../components/BlockTextImageMosaic/TextImageMosaic";
import TextMap from "../components/BlockTextMap/TextMap";
import BrandsCollection from "../components/BrandsCollection/BrandsCollection";
import Heroalt from "../components/Hero/Heroalt";
import Section from "../components/Section/Section";

import { TbPerfume } from "react-icons/tb";
import { BsBookmarkPlus, BsPhone } from 'react-icons/bs';
import { CiMail } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

import { GrGallery } from 'react-icons/gr';
import TextCards from "../components/TextCards/TextCards";

const heroTexts = {
	title: "home.hero.title",
	subtitle: "home.hero.subtitle",
	cta1: "home.hero.cta1",
	cta2: "home.hero.cta2",
	imageAlt: "home.hero.imageAlt",
	heroImage: "Hero-upscale.png"
}

const aboutTexts = {
	title: "home.about.title",
	textParagraph: [
		"home.about.paragraphs.1",
		"home.about.paragraphs.2",
		"home.about.paragraphs.3",
		"home.about.paragraphs.4",
		"home.about.paragraphs.5",
	],
	images: [
		"gallery/Mosaic1.png",
		"gallery/Mosaic2.png",
		"gallery/Mosaic3.png",
		"gallery/Mosaic4.png",
		"gallery/MosaicEmpty.png",
		"gallery/Mosaic1.png",
		"gallery/Mosaic2.png",
		"gallery/Mosaic3.png",
		"gallery/Mosaic4.png",
	],
	logo: "LogoCircle.jpg"
}

const whereTexts = {
	title: "home.where.title",
	textParagraph: [
		"home.where.paragraphs.1",
		"home.where.paragraphs.2",
	],
	location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1399.7394008028116!2d9.150917744666522!3d45.44000684760044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c3bfcb6ab5e1%3A0xc78b25947a733406!2sProfumeria%20Artistica%20%26%20Pelletteria%20Filangeri!5e0!3m2!1sit!2sit!4v1729507846397!5m2!1sit!2sit"
}

const cardsContent = [
	{
		title: "home.cards.1.title",
		description: "home.cards.1.description",
		imageUrl: "gallery/Consulence.png",
	},
	{
		title: "home.cards.2.title",
		description: "home.cards.2.description",
		imageUrl: "gallery/Wedding.png",
	},
	{
		title: "home.cards.3.title",
		description: "home.cards.3.description",
		imageUrl: "gallery/Cosmetics.png",
	},
	{
		title: "home.cards.4.title",
		description: "home.cards.4.description",
		imageUrl: "gallery/Delivery.png",
	},
]

const categories = {
	1: { name: 'home.brands.buttons.perfumes', icon: <TbPerfume /> },
	2: { name: 'home.brands.buttons.makeup', icon: <BsBookmarkPlus /> },
	3: { name: 'home.brands.buttons.skincare', icon: <GrGallery /> },
	4: { name: 'home.brands.buttons.leathers', icon: <GrGallery /> },
};

const brandsData = [
	// Category 1: Perfumes
	{ name: "Etat Libre d'Orange", imageUrl: 'brands/ELDO.png', categoryId: 1, website: 'https://www.etatlibredorange.com/' },
	{ name: "Blancheide", imageUrl: 'brands/BLANCHEIDE.png', categoryId: 1, website: 'https://www.blancheide.com/' },
	{ name: 'Orlane', imageUrl: 'brands/ORLANE.png', categoryId: 1, website: 'https://orlane.com/' },
	{ name: "Robert Piguet", imageUrl: 'brands/ROBERTPIGUET.png', categoryId: 1, website: 'https://www.robertpiguetparfums.com/' },
	// { name: "Van Cleef & Arpels", imageUrl: 'brands/VANCLEEF.png', categoryId: 1, website: 'https://www.vancleefarpels.com/' },
	{ name: "Giardini di Toscana", imageUrl: 'brands/GIARDINIDITOSCANA.png', categoryId: 1, website: 'https://www.giardiniditoscana.com/' },
	{ name: "4711", imageUrl: 'brands/4711.png', categoryId: 1, website: 'https://www.4711.com/' },
	{ name: "Duchessa di Parma", imageUrl: 'brands/DUCHESSADIPARMA.png', categoryId: 1, website: '/' },
	{ name: "Cherigan", imageUrl: 'brands/CHERIGAN.png', categoryId: 1, website: 'https://cheriganparis.com/' },

	// Category 2: Makeup
	{ name: 'AnnaYake', imageUrl: 'brands/ANNAYAKE.png', categoryId: 2, website: 'https://annayake.com/' },

	// Category 3: Cosmetics
	{ name: 'AnnaYake', imageUrl: 'brands/ANNAYAKE.png', categoryId: 3, website: 'https://annayake.com/' },
	{ name: 'Orlane', imageUrl: 'brands/ORLANE.png', categoryId: 3, website: 'https://orlane.com/' },
	{ name: 'Paoma', imageUrl: 'brands/PAOMA.png', categoryId: 3, website: 'https://paomaparis.fr/' },

	// Category 4: Leathers
	// { name: 'aut aut', imageUrl: 'brands/AUTAUT.png', categoryId: 4, website: 'https://autautstudio.com/' },
	{ name: 'Mario Valentino', imageUrl: 'brands/MARIOVALENTINO.png', categoryId: 4, website: 'https://www.mariovalentino.it/' },
	{ name: 'Byblos', imageUrl: 'brands/BYBLOS.png', categoryId: 4, website: 'https://byblosofficial.com/' },
	{ name: 'Aeronautica Militare', imageUrl: 'brands/AERONAUTICA-MILITARE.png', categoryId: 4, website: 'https://www.aeronauticamilitareofficialstore.it/' },
];


const contactTexts = {
	title: "home.contacts.title",
	textParagraph: [
		"home.contacts.paragraphs.1",
		"home.contacts.paragraphs.2",
	],
	cardContent: [
		{
			title: "home.contacts.cards.phone",
			icon: <BsPhone size={20} />,
			descriptions: [
				{
					text: "home.contacts.cards.whatsapp",
					detail: "(+39) 3470784741"
				}
			],
		},
		{
			title: "home.contacts.cards.email",
			icon: <CiMail size={25} />,
			descriptions: [
				{
					detail: "info@filangeri.com"
				}
			],
		},
		{
			title: "home.contacts.cards.social",
			icon: <GoPerson size={24} />,
			descriptions: [
				{
					text: "home.contacts.cards.instagram",
					detail: "@filangerimilano"
				}
			],
		}
	]
}


export default function Home() {
	return (
		<section className="home">
			{/* Hero */}
			<Heroalt
				heroTexts={heroTexts}
			/>

			{/* About */}
			<Section
				sectionId="about"
				title="home.about.title"
				component={
					<TextImageMosaic
						texts={aboutTexts.textParagraph}
						images={aboutTexts.images}
						logo={aboutTexts.logo}
					/>
				}
			/>

			{/* Card Carousel */}
			<Section
				title="home.cards.title"
				component={
					<AutoSwipe
						cards={cardsContent}
					/>
				}
			/>

			{/* Find us */}
			<Section
				title="home.where.title"
				component={
					<TextMap
						texts={whereTexts.textParagraph}
						location={whereTexts.location}
					/>
				}
			/>

			{/* Contact us */}
			<Section
				sectionId="contacts"
				title={contactTexts.title}
				component={<TextCards texts={contactTexts} />}
			/>

			{/* Our brands */}
			<Section
				title="home.brands.title"
				component={
					<BrandsCollection
						categories={categories}
						brands={brandsData}
					/>
				}
			/>
		</section>
	)
}
