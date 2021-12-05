import {API_BASE_URL, BEARER_TOKEN} from './config';
import import queryString from 'query-string';

//
// example url
// https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanFrancisco
// term=restaurants&location=seattle
export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
