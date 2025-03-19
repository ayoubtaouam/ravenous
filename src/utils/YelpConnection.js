const yelpKey = '';
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';

const retrieveBusinesses = async (location, searchTerm, sort) => {
    //const businessSearch = `/businesses/search?location=${location}&term=${searchTerm}&sort_by=${sort}`;
    const businessSearch = `/businesses/search?location=${location}&term=${searchTerm}&sort_by=${sort}`;
    const url = baseUrl + businessSearch;
    console.log(url);
    try {
        const response = await fetch(url, {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${yelpKey}`}});
        if(response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.businesses;
        }
    } catch(error) {
        console.log(error.message);
    }
}

export default retrieveBusinesses;