import { Providers } from "@/app/providers";
import { Container, Flex } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";

const RootContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" flex="1">
      <NavBar />
      <Flex as="main" role="main" direction="column" flex="1" mt="100">
        <Container flex="1">
          <Providers>{children}</Providers>
        </Container>
      </Flex>
    </Flex>
  );
};

export default RootContainer;
