import axios from 'axios';

export default axios.create({
  baseURL: `https://mayaprojects.net/cyber/wp-json/cyber/v1/`
});