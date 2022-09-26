import { useState } from "react";

const useFetchGallery = async (gameName) => {
  const [gallery,setGallery] = useState([]);
  const response = await fetch(`https://api.rawg.io/api/games/${gameName}/screenshots?key=c41ddde4984541a6aff7238cd9b5f310`);
  const data = await response.json();
  setGallery(await data.results);
  return {gallery};
}

export default useFetchGallery;