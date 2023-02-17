import axios from "axios";
axios.defaults.withCredentials = false;

const getKeywordByID = async (userID) => {
  const { data } = await axios.post(
    import.meta.env.VITE_KEYWORD_BACK_URL + "/chatgpt/login?user_id=" + userID,
  );
  return data;
};

const getKeywordByTime = async (time) => {
  const { data } = await axios.post(
    import.meta.env.VITE_KEYWORD_BACK_URL + "/chatgpt/time?minutes=" + time,
  );
  return data;
};

const getChatByKeyword = async (keyword) => {
  const { data } = await axios.get(
    import.meta.env.VITE_KEYWORD_BACK_URL + "/chats/filter_by_keyword?keyword=" + keyword,
  );
  return data;
};

export { getKeywordByID, getKeywordByTime, getChatByKeyword };
