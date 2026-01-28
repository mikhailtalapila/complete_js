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

// export const getJSON = async function (url) {
//   try {
//     const res = await Promise.race([fetch(url), timeout(TIMTOUT_SEC)]);
//     const data = await res.json();
//     if (!res.ok)
//       throw new Error(
//         "Unalbe to get recipes at the moment. Please try again later.",
//       );
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const sendJSON = async function (url, data) {
//   try {
//     const fetchPro = fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     const res = await Promise.race([fetchPro(url), timeout(TIMTOUT_SEC)]);
//     const data = await res.json();
//   } catch (error) {
//     throw error;
//   }
// };

export const AJAX = async function (url, uploadData = undefined) {
  const fetchPro = uploadData
    ? fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    : fetch(url);
  try {
    const res = await Promise.race([fetchPro, timeout(TIMTOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (error) {
    throw error;
  }
};
