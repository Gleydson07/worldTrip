import { Box, Flex, Grid, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { CardCity } from "../../components/CardCity";
import { Information } from "../../components/Continents";
import { Header } from "../../components/Header";

type MajorCountriesProps = {
  flag: string;
  capital: string;
  country: string
  image: string;
}

type ContinentProps = {
  id: string;
  name: string;
  image: string;
  description: string;
  numCountry: number;
  numLanguage: number;
  numCities: number;
  majorCountries: MajorCountriesProps[];
}

const Continent = ({
  id,
  name,
  image,
  description,
  numCountry,
  numLanguage,
  numCities,
  majorCountries
}: ContinentProps) => {
  const { isFallback } = useRouter();

  isFallback && <p>Carregando</p>

  return (
    <>
      <Header />
      <Flex 
        mx="auto"
        maxWidth={1440}
        direction="column"
        align="center"
        justify="center"
        >

        <Flex 
          minWidth="100%"
          minHeight={[150, 500]}
          justifyContent={["center","flex-start"]}
          align={["center", "flex-end"]}
          bgImage={`url(${image})`}
          bgSize="cover"
          bgPosition="top"
        >
        <Heading  
          color="light.400"
          mb={["0","3.75rem"]}
          ml={["0","36"]}
          fontSize={["3xl", "5xl"]}
          fontWeight="semibold"
          lineHeight="base"
        >
            {name}
        </Heading>
        </Flex>

        <Flex
          direction={["column", "row"]}
          my={["6", "20"]}
          justify="space-between"
          width={["100%", 1160]}
        >
          <Box maxWidth={["100%", "55%"]}>
            <Text 
              textAlign="justify" 
              lineHeight={["21px", "9"]} 
              fontSize={["14px", "24px"]}
              mx={["4", "0"]}
              color="dark.700"
            >
              {description}
            </Text>
          </Box>

          <Flex 
            align="center" 
            justify="space-between"
            textAlign={["left","center"]}
            m={["4","auto"]}
            width={["90%", "40%"]} 
          >
            <Information 
              quantity={numCountry}
              description="países"
            />
            <Information 
              quantity={numLanguage}
              description="línguas"
            />
            <Information 
              quantity={numCities}
              description="cidades +100"
              image="/info.svg"
            />
          </Flex>   
        </Flex>
        
        <Box 
          maxWidth={1160}
          mx={["4","auto"]}
        >
          <Heading
            fontSize={["", "4xl"]}
            fontWeight="medium"
            color="dark.700"
          >
            Cidades +100
          </Heading>

          <SimpleGrid
            columns={[1, 4]}
            width="100%"
            my={["5","10"]}
          >
            {majorCountries?.map(data => {
              return (
                <GridItem 
                  key={data.capital}
                  p="1rem"   
                >
                  <CardCity 
                    image={data.image}
                    capital={data.capital}
                    country={data.country}
                    flag={data.flag}
                  />
                </GridItem>
              )
            })}
          </SimpleGrid>
        </Box>  

      </Flex>    

    </>
  )
}

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<ContinentProps[]>(`http://localhost:3333/continents/`);
  const {data} = response;

  const paths = data.map((continent:ContinentProps) => {
    const data = { params: { id: continent.id}}

    return data;
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  const response = await axios.get(`http://localhost:3333/continents/${id}`);
  const {data} = response;

  return { 
    props: data,
    revalidate: 10 // 10seg
   }
}
