async function fetchGallery(gameName) {
  const response = await fetch(`https://api.rawg.io/api/games/${gameName}/screenshots?key=c41ddde4984541a6aff7238cd9b5f310`);
  const data = await response.json();
  try {
    return data.results;
  } 
  catch (error){
    return null;
  }
}
export default fetchGallery;