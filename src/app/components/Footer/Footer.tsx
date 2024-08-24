import { globalStyles } from "@/utils/globalStyles";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import InputComponent from "../Input/Input";

const { mainColor, white, lightOrange, textBlack } = globalStyles;

const Footer = () => {
  return (
    <Flex
      p={40}
      flexDirection={"row"}
      justifyContent={"center"}
      bg={lightOrange}
    >
      <Center w={"80%"} justifyContent={"space-between"}>
        <Flex
          flexDirection={"column"}
          justifyContent={"space-between"}
          p={30}
          h="100%"
        >
          <Box>
            <Text color={textBlack} fontSize={"xx-large"}>
              Creando conexiones.
            </Text>
            <Text fontSize={"medium"}>
              Conectamos con los mejores talentos tecnológicos
            </Text>
          </Box>
          <Flex gap={40}>
            <Box>
              <Text color={textBlack} fontSize={"x-large"}>
                Telefono
              </Text>
              <Text>+54 9 11 3507-7374</Text>
            </Box>
            <Box>
              <Text color={textBlack} fontSize={"x-large"}>
                Email
              </Text>
              <Text>soywallytalent@gmail.com</Text>
            </Box>
          </Flex>
          <Flex gap={20}>
            <Image src={"/linkedin.svg"} width={30} />
            <Image src={"/twitter.svg"} width={30} />
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap={10} p={30}>
          <Text fontSize={"xx-large"}>Contáctanos</Text>
          <Flex gap={20}>
            <InputComponent
              label="Nombre"
              border={`1px solid ${mainColor}`}
              h={50}
              bg={lightOrange}
              p={10}
            />
            <InputComponent
              label="Empresa"
              border={`1px solid ${mainColor}`}
              h={50}
              bg={lightOrange}
              p={10}
            />
          </Flex>
          <InputComponent
            label="Correo electrónico"
            border={`1px solid ${mainColor}`}
            bg={lightOrange}
            h={50}
            p={10}
            type="email"
          />
          <Flex flexDirection="column" gap={10}>
            <Text>Mensaje</Text>
            <Textarea
              border={`1px solid ${mainColor}`}
              height={120}
              bg={lightOrange}
              p={10}
              resize={"none"}
            />
          </Flex>
          <Button
            bg={mainColor}
            textColor={white}
            size="lg"
            mt={20}
            height={50}
          >
            Enviar
          </Button>
        </Flex>
      </Center>
    </Flex>
  );
};

export default Footer;
