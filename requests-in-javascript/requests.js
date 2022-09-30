const axios = require("axios");

// const url = "http://localhost:5001/constellations";

// function getConstNames() {
//     axios
//     .get(url)
//     .then(({data})=>{
//         let result = data.map(star => star.name).sort((starA, starB)=> starA < starB ? 1:-1)
//         console.log(result)
//         // console.log(result)
//         return result
//     })
//     .catch(({message})=>console.log(message))
// }

// function addNewConst(obj){
//     axios
//     .post(url, obj)
// }
// getConstNames()


const BASE_URL = "http://localhost:5001";

Promise.all([
  axios.get(`${BASE_URL}/constellations/UEUrlfX`),
  axios.get(`${BASE_URL}/constellations/zb8QvVt`),
  axios.get(`${BASE_URL}/constellations/32TN5F8`),
]).then(results => {
    const newRes = results.map(result=>result.data)
    console.log(newRes)
});

// axios
//   .get(url)
//   .then((response) => {
//     // console.log(response.status);
//     // console.log(response.statusText);
//     console.log(response.data.filter(star => star.starsWithPlanets < 10));
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });