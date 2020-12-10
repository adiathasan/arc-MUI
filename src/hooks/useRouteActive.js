import { useState } from 'react';

const useRouteActive = () => {
	const [servicesIndex, setServicesIndex] = useState(null);
	const [values, setValues] = useState(0);
	return {
		servicesIndex,
		setServicesIndex,
		values,
		setValues,
	};
};

export default useRouteActive;
