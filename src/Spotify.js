import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "1f59d72e430b49d49df1186b1bd62c59";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  
};

// // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// const token = 'BQAFuEUcbBPeLJ82iZ5FfS-ZkeD8gV-Hczm-lniGTDrOZr1NxcpBu46OH0mEtvaWyI_CqTzb3NWvSpl8_UO6G03hkjI3GkIqf1Nt9dco53rFFWB-ITKM59_aQ_DCcRWyVum5YudRKGP7lkZeDqj6BjOiAhKEJzj4KtubphkilyZyE6Brp_DmCdA0Z7AlioLsi0zaDr5jTbYJ6D8yt9RRuUsoXCQ53TremRskXV_xYFsGI6PbGkv2JrXhXkuG6SnaGCaol6rf2xrEsBxFK-bX7DLu';
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body:JSON.stringify(body)
//   });
//   return await res.json();
// }

// async function getTopTracks(){
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//   return (await fetchWebApi(
//     'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
//   )).items;
// }

// const topTracks = await getTopTracks();
// console.log(
//   topTracks?.map(
//     ({name, artists}) =>
//       `${name} by ${artists.map(artist => artist.name).join(', ')}`
//   )
// );



export default apiClient;