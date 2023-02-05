import axios from "axios";
import { ethers } from "ethers";

const apiUrl = "https://api.linkdao.network";

export const getPrice = async () => {
  const response = await axios.get(apiUrl + "/api/tokenPrice");
  return response.data.data;
};

export const getCirculatingSupply = async () => {
  let res = await axios.get(apiUrl + "/api/circulatingSupply");
  res = res.data.data;
  return parseFloat(ethers.utils.formatUnits(res, 18)).toFixed(3);
};
