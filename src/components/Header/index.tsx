import { Flex } from "@chakra-ui/react";
import { InputSearch } from "../InputSearch";

export const Header = () => {
  const products = [
    {
      id: 1,
      name: "Arroz",
    },
    {
      id: 2,
      name: "Feijão",
    },
    {
      id: 3,
      name: "Macarrão",
    },
    {
      id: 4,
      name: "Teste",
    },
    {
      id: 5,
      name: "Teste2",
    },
    {
      id: 6,
      name: "Teste3",
    },
    {
      id: 7,
      name: "Teste4",
    },
    {
      id: 8,
      name: "Teste5",
    },
  ];

  return (
    <Flex as="header" bg="blue.400" w="100%" py="10">
      <Flex
        as="nav"
        w="100%"
        maxW="1200px"
        mx="auto"
        alignItems="center"
        justifyContent="center"
      >
        <InputSearch w="400px" products={products} />
      </Flex>
    </Flex>
  );
};
