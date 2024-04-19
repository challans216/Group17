import axios from 'axios';

const pharmacyAPI = axios.create({
  baseURL: 'https://example.com/api/pharmacy',
  headers: {
    'Content-Type': 'application/json',
    // Add any required headers
  },
});

export default pharmacyAPI;
