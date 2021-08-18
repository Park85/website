import {useEffect, useState} from 'react';

const useIntersection = ref => {
	const [activateScrolledNavbar, setActivateScrolledNavbar] = useState(false);

	const options = {
		rootMargin: '0px 0px 200px 0px',
		threshold: 1,
	};

	const observe = entries => {
		if (entries[0].isIntersecting) {
			//ref is in view
			setActivateScrolledNavbar(false);
		} else {
			//ref out of view
			setActivateScrolledNavbar(true);
		}
	};

	useEffect(() => {
		// Copied this to a local value as a suggestion from Gatsby warnings
		const refCopy = ref.current;
		const observer = new IntersectionObserver(observe, options);
		if (refCopy) observer.observe(refCopy);

		return () => {
			if (refCopy) observer.unobserve(refCopy);
		};
	});

	return activateScrolledNavbar;
};

export default useIntersection;
