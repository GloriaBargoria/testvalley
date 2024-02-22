import axios from "axios";

const endpoint = "https://api.testvalley.kr";

const getBannerData = () => {
  const config = {
    method: "GET",
    url: `${endpoint}/main-banner/all`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
  };
  return axios(config);
};

export { getBannerData };
