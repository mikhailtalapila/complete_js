"use strict";

// //

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// // // NEW COUNTRIES API URL (use instead of the URL shown in videos):
// // // https://restcountries.com/v2/name/portugal

// // // NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// // // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
// const renderError = function (message) {
//   countriesContainer.insertAdjacentText("beforeend", message);
//   countriesContainer.style.opacity = 1;
// };
// const renderCountry = function (data, className = "") {
//   const html = `
//   <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//   `;

//   countriesContainer.insertAdjacentHTML("beforeend", html);
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

const lotteryPromise = new Promise(function (resolve, reject) {});
