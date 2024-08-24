import { Flex, Input, InputProps, Text } from "@chakra-ui/react";

interface Props extends InputProps {
  label: string;
}

const InputComponent = ({ label, ...rest }: Props) => {
  return (
    <Flex flexDirection="column" gap={10}>
      <Text>{label}</Text>
      <Input {...rest} />
    </Flex>
  );
};

export default InputComponent;
