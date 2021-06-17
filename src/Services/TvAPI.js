//apiKey= b6d02de56d3c873de2132d8f9c789f9c;

// netflix id: 8
//netflix url:https://api.themoviedb.org/3/discover/tv?api_key=b6d02de56d3c873de2132d8f9c789f9c&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_providers=8&watch_region=CA&with_watch_monetization_types=flatrate;
// crave id: 230;
//disney+ id: 337;

//apple+ : 350;

//https://api.themoviedb.org/3/tv/60735?api_key=b6d02de56d3c873de2132d8f9c789f9c&language=en-US


const url = (id) => {
  const streamingServiceUrl = `https://api.themoviedb.org/3/discover/tv?api_key=b6d02de56d3c873de2132d8f9c789f9c&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_providers=${id}&watch_region=CA&with_watch_monetization_types=flatrate`;
  return streamingServiceUrl;
}

export const allHomeData = async() => {
  const netflixResponse = await fetch(url(8));
  const netflixData = await netflixResponse.json();

  const craveResponse = await fetch(url(230));
  const craveData = await craveResponse.json();

  const disneyResponse = await fetch(url(337));
  const disneyData = await disneyResponse.json();

  const appleResponse = await fetch(url(350));
  const appleData = await appleResponse.json();
  return await Promise.all([netflixData, craveData, disneyData, appleData]);
}

export const getShowById = async(id) => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=b6d02de56d3c873de2132d8f9c789f9c&language=en-US`);
  const data = response.json();
  return data;
}