import axios from "axios";

class GiphyApi {
  static getSearchResults(limit, rating, q) {
     return axios({
     method: "GET",
     url: `http://api.giphy.com/v1/gifs/search`,
      params: {
        api_key: 'FfJGay2ccKpR7Sb0uftPnrsmeBhFVInR',
        limit: limit,
        rating: rating,
        q: q
      }
    })
  }
}

export default GiphyApi;
