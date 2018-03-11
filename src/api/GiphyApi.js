import axios from "axios";

class GiphyApi {
  static fetchSearchResults(limit, rating, q) {
     return axios({
     method: "GET",
     url: `https://api.giphy.com/v1/gifs/search`,
      params: {
        api_key: 'FfJGay2ccKpR7Sb0uftPnrsmeBhFVInR',
        limit: limit,
        rating: rating,
        q: q
      }
    })
  }

  static fetchTrendingResults(limit, rating) {
     return axios({
     method: "GET",
     url: `https://api.giphy.com/v1/gifs/trending`,
      params: {
        api_key: 'FfJGay2ccKpR7Sb0uftPnrsmeBhFVInR',
        limit: limit,
        rating: rating
      }
    })
  }

  static fetchRandomResult(rating) {
     return axios({
     method: "GET",
     url: `https://api.giphy.com/v1/gifs/random`,
      params: {
        api_key: 'FfJGay2ccKpR7Sb0uftPnrsmeBhFVInR',
        rating: rating
      }
    })
  }



}



export default GiphyApi;
