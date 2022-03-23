import { Flex, Input, InputProps } from "@chakra-ui/react";
import { useState } from "react";

type ProductsProps = {
  id: number;
  name: string;
};

interface InputSearchProps extends InputProps {
  products: ProductsProps[];
}

export const InputSearch = ({ products, ...rest }: InputSearchProps) => {
  const [inputFiltered, setInputFiltered] = useState<ProductsProps[]>([]);

  const handleChange = (e: any) => {
    const search = e.target.value;

    const searchProducts = [...products];

    const productFiltered = searchProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (search === "") {
      setInputFiltered([]);
    } else {
      setInputFiltered(productFiltered);
    }
  };

  return (
    <Flex w="100%" flexDir="column" gap="20px" position="relative">
      <Input type="text" color="black" onChange={handleChange} {...rest} />
      {inputFiltered.length > 0 && (
        <Flex
          bg="gray.300"
          w="400px"
          h="200px"
          flexDir="column"
          position="absolute"
          bottom="-210px"
          left="0"
        >
          {inputFiltered &&
            inputFiltered
              .slice(0, 3)
              .map(({ id, name }) => <h1 key={id}>{name}</h1>)}
        </Flex>
      )}
    </Flex>
  );
};
