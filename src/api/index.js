import axios from 'axios';

const BASE_URL = 'https://codenotcompleted.com/api/v1/';
const NEWS_LIST_METHOD = 'news';

const request = async (method, params = {}) => {
  const config = { params };
  const response = axios.get(`${BASE_URL}${method}`, config);
  await response.then((res) => res.data).catch(() => {
    alert('Непредвиденная ошибка');
    return null;
  });
};

export default {
  getNews() {
    return request(NEWS_LIST_METHOD, { numberPage: 1 });
  },
};
