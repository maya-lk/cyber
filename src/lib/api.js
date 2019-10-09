import axios from 'axios';

export default axios.create({
  baseURL: `https://mayaprojects.net/cyber/wp/wp-json/cyber/v1/`
});