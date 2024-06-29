import { Heading, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import AnimeList from "../components/AnimeList";
import { Box } from "@chakra-ui/react";
import "./fonts.css";
function Home() {
  return (
    <Box m="auto" bgColor="#202020">
      <Text color="white" className="abril-fatface-regular">
        <Text textShadow="12px 12px 14px rgba(229, 0, 0, 0.2)">HentaiX</Text>
      </Text>
      <AnimeList />
      <Outlet />
    </Box>
  );
}

export default Home;
