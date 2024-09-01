import { Card, Button, Text, Box, Image } from "@chakra-ui/react";

export function AnimeCard({ anime }) {
  const handleNavigate = () => {
    // Abre el enlace de afiliado en una nueva pestaña
    window.open(
      "https://www.cpmrevenuegate.com/qqfpq6n3pi?key=ef9236e819e90a08c2193973b410a87c",
      "_blank"
    );

    // Abre la URL del video en una ventana emergente
    const videoWindow = window.open(anime.url_video, "_blank");

    // Se asegura de que la ventana emergente se enfoque si es posible
    if (videoWindow) {
      videoWindow.focus();
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Box>
      <Card
        bg="gray.300"
        m="auto"
        borderTop="8px solid"
        borderTopColor="#E50000"
        my="10px"
        maxW={{ lg: "220px" }}
        minW={{ lg: "220px" }}
        maxHeight="350px"
        minHeight="350px"
        height="100%"
        boxShadow="2xl"
        gap={2}
        flexWrap="wrap"
        w="220px"
        textAlign="center"
        transition="transform 0.2s"
        _hover={{
          boxShadow: "dark-lg",
          transform: "scale(1.01)",
          color: "gray.800",
          borderTopColor: "#8B0000",
        }}
      >
        <Image
          minW="25px"
          maxW="250px"
          minH="170px"
          maxH="170px"
          src={anime.url_imagen}
          filter="auto"
          brightness="60%"
          blur="2px"
          _hover={{ filter: "none", blur: "0px" }}
        />
        <Text fontSize="30px">{truncateText(anime.nombre_anime, 12)}</Text>
        <Button
          color="white"
          bgColor="#E50000"
          _hover={{ bgColor: "#8B0000" }}
          m="auto"
          mt="auto"
          mb="20px"
          w="90%"
          onClick={handleNavigate}
        >
          Ver más
        </Button>
      </Card>
    </Box>
  );
}
