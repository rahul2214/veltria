import { useState, useEffect } from 'react';

const useDebouncedSearch = (searchTerm, delay = 500) => {
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, delay);

        return () => clearTimeout(timer);
    }, [searchTerm, delay]);

    return debouncedSearchTerm;
};

export default useDebouncedSearch;
