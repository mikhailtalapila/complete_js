import { TIMTOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Request took too long! Timeout after ${TIMTOUT_SEC} second`),
      );
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(5)]);
    const data = await res.json();
    if (!res.ok)
      throw new Error(
        "Unalbe to get recipes at the moment. Please try again later.",
      );
    return data;
  } catch (error) {
    throw error;
  }
};
