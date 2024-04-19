import axios from 'axios';

const emergencyAPI = axios.create({
  baseURL: 'https://example.com/api/emergency',
  headers: {
    'Content-Type': 'application/json',
    // Add any required headers
  },
});

export default emergencyAPI;
