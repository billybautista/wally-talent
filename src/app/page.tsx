import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Page() {
  return (
    <Box flexDirection={"column"}>
      <Flex
        id="section1"
        height={"calc(100vh - 80px)"}
        bg="#ffebd3"
        style={{
          scrollMarginTop: "100px",
        }}
        flexDirection={"row"}
        alignContent={"center"}
        p={20}
      >
        <Center width={"90%"}>
          <VStack>
            <Box>
              <Text
                fontSize={{
                  md: "4xl",
                  lg: "7xl",
                }}
                color={"#19100F"}
                textAlign="center"
                lineHeight={"1.2"}
              >
                Conectando
                <span style={{ color: "#FF4D00" }}> startups </span>
                y<br />
                <span style={{ color: "#FF4D00" }}> emprendedores </span>
                con
                <br />
                talento tech
              </Text>
            </Box>

            <Flex gap={14} marginTop="80px">
              <Button
                height={"60px"}
                // color="#FF4D00"
                textColor={"#19100F"}
                bg="white"
                size="xl"
                px={20}
                border={"2px solid #19100F"}
              >
                Soy talento
              </Button>
              <Button
                bg="#FF4D00"
                // textColor="white"
                textColor={"#19100F"}
                size="lg"
                px={20}
                border={"2px solid #19100F"}
                height={"60px"}
              >
                Busco talento
              </Button>
            </Flex>
          </VStack>
        </Center>
        <Center width={"40%"}>
          <Image src="/woman-laptop.png" alt="hero" height={"70%"} />
        </Center>
      </Flex>
      <Flex
        id="section2"
        height={"calc(100vh - 80px)"}
        // bg="#FFA8A8"
        bg="white"
        style={{
          scrollMarginTop: "80px",
        }}
      >
        <Center
          flexDirection={"column"}
          m={28}
          style={{
            scrollMarginTop: "80px",
          }}
        >
          <Box marginBottom={"40px"} mb={20}>
            <Text fontSize={"6xl"}>Sobre Nosotros</Text>
          </Box>
          <Flex gap={20}>
            <Center
              border={"1.5px solid #19100F"}
              bg={"#FFCC99"}
              w="30%"
              p={10}
              borderRadius={10}
              flexDirection={"column"}
            >
              <Flex
                height={32}
                width={32}
                bg={"white"}
                borderRadius={100}
                alignItems={"center"}
                justifyContent={"center"}
                mb={10}
              >
                <Text>v</Text>
              </Flex>
              <Text fontSize={"2xl"} textAlign={"justify"} mb={14}>
                Impulsamos el éxito
              </Text>
              <Text fontSize={"1xl"} textAlign={"justify"}>
                Conectamos con el talento tecnológico que tu emprendimiento
                necesita. Apoyamos el crecimiento y la innovación te tu negocio.
              </Text>
            </Center>
            <Center
              border={"1.5px solid #19100F"}
              bg={"#FFCC99"}
              w="30%"
              p={10}
              borderRadius={10}
              flexDirection={"column"}
            >
              <Flex
                height={32}
                width={32}
                bg={"white"}
                borderRadius={100}
                alignItems={"center"}
                justifyContent={"center"}
                mb={10}
              >
                <Text>v</Text>
              </Flex>
              <Text fontSize={"2xl"} textAlign={"justify"} mb={14}>
                Foco y soluciones
              </Text>
              <Text fontSize={"1xl"} textAlign={"justify"}>
                Identificamos y atraemos al talento tech más adecuado.Creamos
                procesos ajustado a las necesidades específicas de tu proyecto
              </Text>
            </Center>
            <Center
              border={"1.5px solid #19100F"}
              bg={"#FFCC99"}
              w="30%"
              p={10}
              borderRadius={10}
              flexDirection={"column"}
            >
              <Flex
                height={32}
                width={32}
                bg={"white"}
                borderRadius={100}
                alignItems={"center"}
                justifyContent={"center"}
                mb={10}
              >
                <Text>v</Text>
              </Flex>
              <Text fontSize={"2xl"} textAlign={"justify"} mb={14}>
                Conexión Solida
              </Text>
              <Text fontSize={"1xl"} textAlign={"justify"}>
                Somos una empresa de reclutamiento y selección de talento
                tecnológico para startups y emprendimientos
              </Text>
            </Center>
          </Flex>
        </Center>
      </Flex>
      <Flex
        id="section3"
        height={"calc(100vh - 80px)"}
        flexDirection={"column"}
        alignItems={"center"}
        bg="#ffebd3"
        style={{
          scrollMarginTop: "80px",
        }}
      >
        <Center flexDirection={"column"}>
          <Box marginTop={"30px"}>
            <Text fontSize={"7xl"}>¿Por que nosotros ?</Text>
          </Box>
          <Box border={"1px solid #FF4D00"} mt={10} mr={28} ml={28} p={30}>
            <VStack gap={10}>
              <Flex
                direction="row"
                h="100px"
                p={10}
                alignItems={"center"}
                gap={10}
              >
                <Box width={"30%"}>
                  <Text fontSize={"2xl"}>Integridad y Transparencia</Text>
                </Box>
                <div
                  style={{
                    height: "4px",
                    backgroundColor: "#FF4D00",
                    width: "80px",
                  }}
                />
                <Box width={"70%"}>
                  <Text fontSize={"2xl"}>
                    Operamos con integridad y transparencia desde el inicio
                    hasta el final de nuestros procesos.
                  </Text>
                </Box>
              </Flex>

              <Flex
                direction="row"
                h="100px"
                p={10}
                alignItems={"center"}
                gap={10}
              >
                <Box width={"30%"}>
                  <Text fontSize={"2xl"}>Atención Personalizada</Text>
                </Box>
                <div
                  style={{
                    height: "4px",
                    backgroundColor: "#FF4D00",
                    width: "80px",
                  }}
                />
                <Box width={"70%"}>
                  <Text fontSize={"2xl"}>
                    Nos enfocamos en tus necesidades para ofrecerte soluciones
                    de manera efectiva.
                  </Text>
                </Box>
              </Flex>
              <Flex
                direction="row"
                h="100px"
                p={10}
                alignItems={"center"}
                gap={10}
              >
                <Box width={"30%"}>
                  <Text fontSize={"2xl"}>Experiencia en IT</Text>
                </Box>
                <div
                  style={{
                    height: "4px",
                    backgroundColor: "#FF4D00",
                    width: "80px",
                  }}
                />
                <Box width={"70%"}>
                  <Text fontSize={"2xl"}>
                    Tenemos conocimientos en tecnología y podemos ayudarte a
                    impulsar tu emprendimiento o startup.
                  </Text>
                </Box>
              </Flex>
            </VStack>
          </Box>
        </Center>
      </Flex>
      <Flex
        height={"calc(100vh - 80px)"}
        bg="white"
        id="section4"
        style={{
          scrollMarginTop: "80px",
        }}
      >
        <Flex flexDirection={"column"} pr={36} pl={20}>
          <Box marginBottom={"40px"} mt={24}>
            <Text fontSize={"8xl"}>Nuestros Servicios</Text>
          </Box>
          <Box>
            <Text fontSize={"4xl"} textAlign={"justify"}>
              Ofrecemos servicios de reclutamiento y selección de talento
              tecnológico para startups y emprendimientos. Nos enfocamos en
              encontrar el talento que se ajuste a tus necesidades y visión de
              negocio.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
