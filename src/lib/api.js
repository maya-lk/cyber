import axios from 'axios';

export default axios.create({
  baseURL: `http://www.cybergrab.com/wp/wp-json/cyber/v1/`
});