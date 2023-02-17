import axios from "axios";
axios.defaults.withCredentials = true;

export const searchKeyword = async (keyword) => {
  const { data } = await axios.get(
    import.meta.env.VITE_KEYWORD_BACK_URL + "/search?keyword=" + keyword,
  );
  return data;
};
