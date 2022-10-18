import axios from 'axios';

const BASE_URL = 'https://codenotcompleted.com/api/v1/';
const NEWS_LIST_METHOD = 'news';
const DETAILED_NEW_METHOD = 'news';

const request = async (method, params = {}) => {
  const config = { params };
  const response = axios.get(`${BASE_URL}${method}`, config);
  await response.then((res) => res.data).catch(() => {
    alert('Непредвиденная ошибка');
    return null;
  });
};

export default {
  getNews(numberPage = 1, count = 20, filters = {}) {
    return request(NEWS_LIST_METHOD, {
      numberPage, count, filters,
    });
  },
  getDetailedNew(id) {
    return request(`${DETAILED_NEW_METHOD}/${id}`);
  },
};
