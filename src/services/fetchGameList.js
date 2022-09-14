async function fetchGameList(gameName,platformID = 4) { // IDs= {pc:4,}
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=c41ddde4984541a6aff7238cd9b5f310&search=${gameName}&platforms=${platformID}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
}

export default fetchGameList;