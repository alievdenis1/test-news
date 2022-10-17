import axios from 'axios';

const TOKEN = 'zpqzkUc2t0Inl4Md1VH6Ww';
const BASE_URL = 'https://app.fakejson.com/q';

const DATA_NEWS_LIST = {
  name: 'stringWords',
  date: 'date',
  raiting: 'numberInt|1,10',
  authorName: 'nameFirst',
  body: 'stringLong',
  _repeat: 20,
};

const request = async (data = {}) => {
  const payload = {
    token: TOKEN,
    data,
  };

  return axios({
    method: 'post',
    url: BASE_URL,
    data: payload,
  }).then((res) => res.data);
};

export default {
  getNews() {
    return request(DATA_NEWS_LIST);
  },
};
