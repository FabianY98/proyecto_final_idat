import { useState, useEffect } from 'react';

export const useFetch = (url = '', options = {}) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			if (!isMounted) return;

			// intenta esto...
			try {
				const response = await fetch(url, options);

				if (!response.ok) {
					setIsLoading(false);
					throw new Error('Ocurrió un error en la petición');
				}

				const data = await response.json();

				setData(data);
				setIsLoading(false);
			} catch (error) {
				// por si todo falla haz esto...
				setError(error);
				setIsLoading(false);
			} finally {
				// haz esto sí o sí
				setIsLoading(false);
			}
		};

		fetchData();

		return () => {
			isMounted = false;
		};
	}, []);

	return { data, error, isLoading };
};
