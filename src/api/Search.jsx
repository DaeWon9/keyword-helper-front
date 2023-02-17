import axios from "axios";
axios.defaults.withCredentials = true;

export const searchKeyword = async (keyword) => {
  const data = await axios.get("https://openapi.naver.com/v1/search/encyc.json", {
    params: {
      query: keyword,
      display: 1,
    },
    headers: {
      "X-Naver-Client-Id": import.meta.env.VITE_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": import.meta.env.VITE_NAVER_CLIENT_SECRET,
    },
  });

  console.log(data);
  return data;
};
