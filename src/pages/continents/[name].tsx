import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";

interface ContinentProps {
  id: string;
  name: string;
  image: string;
  description: string;
  numCountry: number;
  numLanguage: number;
  numCities: number;
  majorContries: [
    {
      flag: string;
      capital: string;
      country: string;
    }
  ]
}

const Continent = (continent: ContinentProps) => {

  return (
    <>
      <Header />
      <h4>{continent.description}</h4>
      {/* <Flex 
        mx="auto"
        width="100%"
        maxWidth={[450, 1440]}
        direction="column"
        >
        <Flex 
          width="100%" 
          minHeight={["163px", "100%"]}
          px={["5","12"]}
          py={["10","20"]}
          justifyContent="space-around"
          bgImage={`url(${image})`}
          bgRepeat="no-repeat"
        >
        <Heading  
            color="light.400"
            fontSize={["xl", "4xl"]}
            fontWeight="medium"
            lineHeight="base"
        >
            {title}
        </Heading>
        </Flex>

        //descriptions and data
        <Flex>

        </Flex>
        
        //cards
        <Grid>
            
        </Grid> 

      </Flex> */}     

    </>
  )
}

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(`http://localhost:3333/continents`);
  const {data} = response;

  const paths = data.map((dataContinent: ContinentProps) => {
    return {params: { name: dataContinent.name}}
  })

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params;

  const response = await axios.get(`http://localhost:3333/continents?name=${name}`);
  const {data} = response;

  return { 
    props: {
      continent: data
    }
   }
}
