import { Heading, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import AnimeList from "../components/AnimeList";
import { Box } from "@chakra-ui/react";
import Banner from "../assets/banner.jpg";
import "./fonts.css";
function Home() {
  return (
    <Box m="auto" bgColor="100%">
      <Box
        bgImage={Banner}
        bgSize="cover"
        w="100vw"
        h="300px"
        color={"white"}
      ></Box>
      <Text color="white" className="abril-fatface-regular">
        <Text textShadow="12px 12px 14px rgba(229, 0, 0, 0.2)">HentaiX</Text>
      </Text>
      <AnimeList />
      <Outlet />
    </Box>
  );
}

export default Home;
