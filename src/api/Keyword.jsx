import axios from "axios";
axios.defaults.withCredentials = true;

export const getKeyword = async (userId) => {
  const data = await axios({
    method: "POST",
    url: import.meta.env.VITE_KEYWORD_BACK_URL + "/~~",
    mode: "cors",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: { id: userId },
  });
  return data;
};
