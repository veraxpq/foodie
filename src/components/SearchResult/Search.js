import React from 'react';
import useReactRouter from 'use-react-router';
import {useBusinessSearch} from '../../hooks/useBusinessSearch';

export function Search() {
    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);
}