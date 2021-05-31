import {useEffect, useState} from 'react';

const useIntersection = ref => {
	const [activateSrolledNavbar, setActivateSrolledNavbar] = useState(false);

	const options = {
		rootMargin: '0px 0px 200px 0px',
		threshold: 1,
	};

	const observe = entries => {
		// console.log(entries);
		if (entries[0].isIntersecting) {
			// console.log('Ref is in View');
			setActivateSrolledNavbar(false);
		} else {
			// console.log('Ref out of view');
			setActivateSrolledNavbar(true);
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

	return activateSrolledNavbar;
};

export default useIntersection;
