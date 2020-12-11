import { useState } from 'react';

const tabs = [
	{ label: 'Home', key: 0, link: '/' },
	{ label: 'Services', key: 1, link: '/services' },
	{ label: 'The Revolution', key: 2, link: '/revolution' },
	{ label: 'About Us', key: 3, link: '/about' },
	{ label: 'Contact Us', key: 4, link: '/contact' },
	{ label: 'Free Estimate', key: 5, link: '/estimate' },
];

const services = [
	{ label: 'All Services', key: 0, link: '/services' },
	{ label: 'Custome Software Development', key: 1, link: '/customsoftware' },
	{ label: 'Mobile App Development', key: 2, link: '/mobileapps' },
	{ label: 'Website Development', key: 3, link: '/websites' },
];

const useRouteActive = () => {
	const [servicesIndex, setServicesIndex] = useState(null);
	const [values, setValues] = useState(0);
	return {
		servicesIndex,
		setServicesIndex,
		values,
		setValues,
		tabs,
		services,
	};
};

export default useRouteActive;
