export default async function fetchSingleGame(gameID) {
  console.log(gameID);
  if (gameID) {
    try{
      const key = "c41ddde4984541a6aff7238cd9b5f310";
      const response = await fetch(`https://api.rawg.io/api/games/${gameID}?key=${key}`);
      const data = await response.json();
      console.log(data);
      return data;
    }
    catch(error) {
      console.log(error);
    }
  } else {
    return null;
  }
}