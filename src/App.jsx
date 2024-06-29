import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      m="auto"
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      gap="2"
      bgColor="#202020"
      textAlign="center"
      w="100vv"
      minW="100vv"
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
