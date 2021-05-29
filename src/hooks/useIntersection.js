import React, {useEffect, useState} from 'react';

const useIntersection = ref => {
	const [activateSrolledNavbar, setActivateSrolledNavbar] = useState(false);

	const options = {
		rootMargin: '0px 0px 200px 0px',
		threshold: 1,
	};

	const observe = entries => {
		console.log(entries);
		if (entries[0].isIntersecting) {
			console.log('Ref is in View');
			setActivateSrolledNavbar(false);
		} else {
			console.log('Ref out of view');
			setActivateSrolledNavbar(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(observe, options);
		if (ref.current) observer.observe(ref.current);

		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	});

	return activateSrolledNavbar;
};

export default useIntersection;
