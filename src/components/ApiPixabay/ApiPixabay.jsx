import axios from 'axios';
import { constAxios } from '../Constants/Constants';

export default class ApiPixabay {
  constructor() {
    this.Axios = axios.create({
      baseURL: constAxios.BASE_URL,
    });
    this.searchQuery = '';
    this.page = 1;
  }

  async getPictures() {
    const response = await this.Axios.get('', {
      params: {
        key: constAxios.KEY,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        savesearch: true,
        page: this.page,
        per_page: constAxios.PER_PAGE,
      },
    });
    this.incrementPage();
    return response.data;
  }

  incrementPage() {
    this.page++;
  }

  resetPage() {
    this.page = 1;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
