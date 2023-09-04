export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '975da3ed4fmsh6bdf19ab78bdab7p13540ejsn849959bf5d6a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '975da3ed4fmsh6bdf19ab78bdab7p13540ejsn849959bf5d6a',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (uri,options) => {
    const response = await fetch(uri,options);
    const data = await response.json();

    return data;
}