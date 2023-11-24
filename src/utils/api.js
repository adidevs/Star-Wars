import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

// Fetches data from the Star Wars API
export const fetchData = async (category) => {
    try {
      const response = await axios.get(`${BASE_URL}/${category}`);
      while(response.data.next) {
        const nextResponse = await axios.get(response.data.next);
        response.data.results = [...response.data.results, ...nextResponse.data.results];
        response.data.next = nextResponse.data.next;
      }
      return response.data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
