import axios from 'axios'; 
import { ENV_VARS } from '../config/envVars.js';

const fetchFromTMDB = async (url) => {
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
      },
    };

    const response = await axios.get(url , options);

    if(response.status !== 200) { 
      console.error('Failed to fetch data from TMDB API');
      return null;
    }

    return response.data;

  } catch (error) {
    console.error(error);
    return null;
  }
}


export default fetchFromTMDB;