import axios from 'axios';

const BASE_URL = 'https://codenotcompleted.com/api/v1/';
const NEWS_LIST_METHOD = 'news';
const DETAILED_NEW_METHOD = 'news';

const request = async (method, params = {}) => {
  const config = { params };
  const response = axios.get(`${BASE_URL}${method}`, config);
  return response.then((res) => res).catch(() => {
    alert('Непредвиденная ошибка');
    return null;
  });
};

export default {
  getNews(numberPage = 1, count = 20, filters = {}) {
    return request(NEWS_LIST_METHOD, {
      numberPage, count, filters,
    }).then((res) => res.data);
  },
  getDetailedNew(id) {
    return request(`${DETAILED_NEW_METHOD}/${id}`).then((res) => res.data);
  },
};
