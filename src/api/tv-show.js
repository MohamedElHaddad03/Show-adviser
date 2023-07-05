import axios from "axios";
import { BASE_URL, RECOMMENDATION_URL } from "../config";
import { API_KEY_PARAM } from "../config";

export class TVShowApi {
  static async fetchPopular() {
    const response = await axios.get(`${BASE_URL}tv/popular/${API_KEY_PARAM} `);
    return response.data.results;
  }
  static async fetchRecommendation(tvShowID) {
    const response = await axios.get(`${BASE_URL}tv/${tvShowID}/recommendations${API_KEY_PARAM} `);
    return response.data.results;
  }
  static async fetchByTitle(title) {
    const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title} `);
    return response.data.results;
  }
}
