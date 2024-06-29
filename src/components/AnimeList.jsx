import { Box } from "@chakra-ui/react";
import { getAllAnimes } from "../api/api.api";
import { useState, useEffect } from "react";
import { AnimeCard } from "./AnimeCard";
function AnimeList() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function loadAnimes() {
      const res = await getAllAnimes();
      setAnimeList(res.data);
    }

    loadAnimes();
  }, []);

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }} // Aquí estableces 4 columnas de tamaño igual
      gap={4}
      justifyContent="space-around"
      alignItems="center"
      m="auto auto auto auto"
    >
      {animeList &&
        animeList.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
    </Box>
  );
}

export default AnimeList;
