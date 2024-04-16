import axios, { isCancel, AxiosError } from "axios";

export default class BoredApi {
  static boredAPi = new BoredApi();
  baseUrl = "https://www.boredapi.com/api/activity";

  async getActivity(params) {
    let url = this.baseUrl;
    let isFirst = true;
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value && value != "") {
          if (isFirst) {
            url = url + "?" + key + "=" + value;
            isFirst = false;
          } else {
            url = url + "&" + key + "=" + value;
          }
        }
      });
    }
    console.log(JSON.stringify(url));
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      if (isCancel(err)) {
        console.log("Request canceled", err.message);
      } else if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
      alert(err.config);
    }
  }
}
