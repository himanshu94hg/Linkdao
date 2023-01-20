import axios from "axios";

const apiUrl = "https://api.linkdao.network/api/tokenPrice";

export const getPrice = async () => {
  const response = await axios.get(apiUrl);
  return response.data.data;
};
