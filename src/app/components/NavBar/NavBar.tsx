"use client";

import { useNavBackground } from "@/hook/useNavBackground";
import { globalStyles } from "@/utils/globalStyles";
import {
  Box,
  Center,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const { white, mainColor, lightOrange } = globalStyles;
const navbarHeight = 100;

const NAV_ITEMS = [
  {
    label: "Inicio",
    href: "section1",
    backgroundColor: lightOrange,
  },
  {
    label: "Nosotros",
    href: "section2",
    backgroundColor: white,
  },
  {
    label: "Servicios",
    href: "section3",
    backgroundColor: lightOrange,
  },
  {
    label: "Contacto",
    href: "section4",
    backgroundColor: white,
  },
];

const NavBar = () => {
  const navBarBackground = useNavBackground(NAV_ITEMS, navbarHeight);

  return (
    <Box
      paddingX={100}
      height={100}
      as="nav"
      position="fixed"
      w="100%"
      overflow="overlay"
      backgroundColor={navBarBackground}
      zIndex={1000}
    >
      <HStack
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        height={60}
        backgroundColor={white}
        borderRadius={10}
        marginTop={20}
        padding={30}
      >
        <Center>
          <Image src="/logo.png" alt="logo" height={60} />
          <Text>Wally Talent</Text>
        </Center>
        <Stack direction="row" spacing={30}>
          {NAV_ITEMS.map((item) => (
            <Link
              as="a"
              key={item.label}
              style={{
                padding: "20px",
              }}
              href={`#${item.href}`}
              cursor={"pointer"}
              _hover={{
                color: mainColor,
              }}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      </HStack>
    </Box>
  );
};

export default NavBar;
