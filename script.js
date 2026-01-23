"use strict";

// //

// const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// // // NEW COUNTRIES API URL (use instead of the URL shown in videos):
// // // https://restcountries.com/v2/name/portugal

// // // NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// // // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
// const renderError = function (message) {
//   countriesContainer.insertAdjacentText("beforeend", message);
//   countriesContainer.style.opacity = 1;
// };
const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};
//   //countriesContainer.style.opacity = 1;
// };
// // const getCountryAndNeighbourData = function (county) {
// //   const request = new XMLHttpRequest();
// //   request.open("GET", `https://restcountries.com/v2/name/${county}`);
// //   request.send();
// //   request.addEventListener("load", function () {
// //     const [data] = JSON.parse(request.responseText);
// //     console.log(data);
// //     //render country 1
// //     renderCountry(data);
// //     const [neighbour] = data.borders;
// //     if (!neighbour) return;
// //     const request2 = new XMLHttpRequest();
// //     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
// //     request2.send();
// //     request2.addEventListener("load", function () {
// //       const data2 = JSON.parse(request2.responseText);
// //       console.log(data2);
// //       renderCountry(data2, "neighbour");
// //     });
// //   });
// // };
// // getCountryAndNeighbourData("latvia");

// // setTimeout(() => {
// //   console.log("1 second passed");
// //   setTimeout(() => {
// //     console.log("1 second. passed");
// //     setTimeout(() => {
// //       console.log("one second passed.");
// //       setTimeout(() => {
// //         console.log("one second passed.");
// //         setTimeout(() => {
// //           console.log("2 seconds have passed.");
// //         }, 2000);
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);
// const getJson = function (url, error) {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${error}: ${response.status}`);
//     return response.json();
//   });
// };

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v2/name/${country}`)
// //     .then((response) => {
// //       console.log(response);
// //       if (!response.ok) throw new Error("Country not found ");
// //       return response.json();
// //     })
// //     .then((data) => {
// //       renderCountry(data[0]);
// //     })
// //     .catch((err) => {
// //       console.log("error");
// //       renderError(`Something went wrong. please try again. ${err.message}`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// const getCountryData = function (country) {
//   getJson(
//     `https://restcountries.com/v2/name/${country}`,
//     "Unable to find the country"
//   )
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error("No neighbour found");
//       return getJson(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         "No country found"
//       );
//     })
//     .then((response) => renderCountry(response, "neighbour"))
//     .catch((err) => renderError(err.message))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

// const whereImI = function (lat, long) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`
//   )
//     .then((resp) => {
//       if (!resp.ok) throw new Error(`Problem with geocoding: ${resp.status}`);
//       return resp.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`you are in ${data.city} ${data.countryName}`);
//       return data;
//     })
//     .then((data) => {
//       if (!data) throw new Error(`data not found`);
//       console.log(data);
//       return fetch(`https://restcountries.com/v2/alpha/${data.countryCode}`);
//     })
//     .then((resp) => {
//       if (!resp.ok) throw new Error("No country found");
//       return resp.json();
//     })
//     .then((data) => renderCountry(data))
//     .catch((err) => {
//       console.log(`${err}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// whereImI(52.508, 13.381);
//whereImI(-33.933, 18, 474);
// console.log("test start");
// setTimeout(() => console.log("timeout 0 seconds"), 0);
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let index = 0; index < 10000000000; index++) {}
//   console.log(res);
// });
// console.log("test end");

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() > 0.5) {
//     resolve("You WIN");
//   } else {
//     reject("You lost");
//   }
// });
//
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
//

// var lotteryPromse = new Promise(function(resolve, reject) {
//     if(Math.random() > 0.5) {
//         resolve('You won');
//     } else {
//         reject('you lost');
//     }
// });

// var lotteryPromise = new Promise(function (res, rej) {
//   if (Math.random() > 0.5) {
//     res("you won");
//   } else {
//     rej("you lost");
//   }
// });
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// //
//
// var yesNoPromise = new Promise(function (resolve, reject) {
//   console.log("lottery is now...");
//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       resolve("Yes");
//     } else {
//       reject(new Error("no"));
//     }
//   }, 2000);
// });
// yesNoPromise.then((res) => console.log(res)).catch((err) => console.error(err));
//
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     console.log("waited for seconds");
//     return wait(3);
//   })
//   .then(() => console.log("waited for 3 seconds"));
//
// Promise.resolve("abc").then(() => console.log("test"));
// Promise.reject("err").then(() => console.log("err"));
//

// console.log("getting position");
// const getPosition = function () {
//   return new Promise(function (resvolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => {
//     //     resvolve(position);
//     //   },
//     //   (err) => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resvolve, reject);
//   });
// };

// getPosition().then((res) => console.log(res));

// getPosition()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const getLanguage = function () {
//   return new Promise(function (resolve, reject) {
//     resolve(navigator.languages[0]);
//     reject("no language set");
//   });
// };
//
// getLanguage()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
//
// const whereImI = function () {
//   getPosition()
//     .then((pos) => {
//       console.log(pos.coords);
//       const { latitude: lat, longitude: long } = pos.coords;
//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`
//       );
//     })
//     .then((resp) => {
//       if (!resp.ok) throw new Error(`Problem with geocoding: ${resp.status}`);
//       return resp.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`you are in ${data.city} ${data.countryName}`);
//       return data;
//     })
//     .then((data) => {
//       if (!data) throw new Error(`data not found`);
//       console.log(data);
//       return fetch(`https://restcountries.com/v2/alpha/${data.countryCode}`);
//     })
//     .then((resp) => {
//       if (!resp.ok) throw new Error("No country found");
//       return resp.json();
//     })
//     .then((data) => {
//       renderCountry(data);
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(`${err}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
//
// whereImI();
// const imgContainer = document.querySelector(".images");
//
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;
//     img.addEventListener("load", function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("image not found"));
//     });
//   });
// };
//
// createImage("img/img-1.jpg").then((img) => {
//   console.log("image 1 loaded");
// });
//

// const imageContainer = document.querySelector(".images");
//
// const loadImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;
//     img.addEventListener("load", function () {
//       imageContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("Unable to load image"));
//     });
//   });
// };
// loadImage("img/img-2.jpg")
//   .then(() => {
//     console.log("image load successfully");
//   })
//   .catch((err) => console.error(err.message));
//

// const imageContainer = document.querySelector(".images");
// const loadImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;
//     img.addEventListener("load", function () {
//       imageContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("error image loading..."));
//     });
//   });
// };
// loadImage("img/img-3.jpg")
//   .then((img) => console.log("image 3 loaded"))
//   .catch((err) => console.error(err));
//
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// let currentImage;
// const imageContainer = document.querySelector(".images");
// const loadImage = function (imgSource) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgSource;
//     img.addEventListener("load", function () {
//       imageContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("image could not be loaded"));
//     });
//   });
// };
//
//
//
//
//
//
// loadImage("img/img-1.jpg")
//   .then((img) => {
//     currentImage = img;
//     console.log("image 1 loaded successfully");
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//     return loadImage("img/img-2.jpg");
//   })
//   .then((img) => {
//     currentImage = img;
//     console.log("image 2 loaded successfully");
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//   })
//   .catch((error) => console.error(img));
//
// let curImage;
// const imageContainer = document.querySelector(".images");
// const loadImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;
//     img.addEventListener("load", function () {
//       imageContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("Unable to load image"));
//     });
//   });
// };

// loadImage("img/img-3.jpg")
//   .then((img) => {
//     curImage = img;
//     console.log("image loaded successfully");
//     return wait(1);
//   })
//   .then(() => {
//     curImage.style.display = "none";
//     loadImage("img/img-2.jpg");
//   })
//   .catch((err) => console.error(err));

// const whereAmI = async function (country) {
//   const resp = await fetch(`https://restcountries.com/v2/alpha/${country}`);
//   const data = await resp.json();
//   console.log(data);
// };
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: long } = pos.coords;
//     const res = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`
//     );
//     if (!res.ok) throw new Error("problem getting location data");
//     const dataGeo = await res.json();
//     console.log(dataGeo);
//     const countryResp = await fetch(
//       `https://restcountries.com/v2/alpha/${dataGeo.countryCode}`
//     );
//     if (!countryResp.ok) throw new Error("Problem getting country");
//     const country = await countryResp.json();
//     console.log(country);
//     renderCountry(country);
//     // const data = await resp.json();
//     // console.log(data);
//     countriesContainer.style.opacity = 1;
//     return `You are here`;
//   } catch (error) {
//     console.error(error);
//   }
// };
// (async function () {
//   try {
//     const city = await whereAmI();
//   } catch (error) {
//     console.log("error message");
//   }
// })();

// const getThreeCountries = async function (c1, c3, c2) {
//   try {
//     // const [data1] = await getJson(`test-c1`);
//     // const [data2] = await getJson(`test2-c2`);
//     // const [data3] = await getJson(`test-c3`);
//     Promise.all();
//   } catch (error) {
//     console.error(error);
//   }
// };
// // console.log("1: will get location");
// // const city = whereAmI();
// // console.log(city);
// // whereAmI().then((city) => console.log(city));
// // console.log("2: finished getting location");

// // try {
// //   let y = 1;
// //   const x = 2;
// //   x = 3;
// // } catch (error) {
// //   alert(error.message);
// // }
// const getJson = function (url, error) {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${error}: ${response.status}`);
//     return response.json();
//   });
// };
// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error("request took too long"));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   timeout(0.01),
//   getJson(`https://restcountries.com/v2/name/germany`),
// ])
//   .then((data) => {
//     return data;
//   })
//   .then((data) => console.log(data[0]));

// //promised.allSettled
// Promise.allSettled([
//   Promise.resolve("success"),
//   Promise.reject("error"),
//   Promise.reject("error2"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.any([
//   Promise.resolve("success"),
//   Promise.reject("error"),
//   Promise.reject("error2"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

const imageContainer = document.querySelector(".images");
const createImage = function (imgSource) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgSource;
    img.addEventListener("load", function () {
      imageContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("image could not be loaded"));
    });
  });
};
let currentImage;
createImage("img/img-1.jpg")
  .then((img) => {
    currentImage = img;
    console.log("image 1 loaded successfully");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return loadImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImage = img;
    console.log("image 2 loaded successfully");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((error) => console.error(error));

const loadNPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    console.log("image 1 loaded");
    await wait(2);
    img.style.display = "none";
    img = await createImage("img/img-2.jpg");
    await wait(2);
    img.style.display = "none";
  } catch (error) {
    console.error(error);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgEl = await Promise.all(imgs);
    imgEl.forEach((img) => img.classList.add("parallel"));
  } catch (error) {
    console.error(error);
  }
};
