import { Flex, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
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

const Continent = ({continent}) => {
  const { isFallback } = useRouter();

  isFallback && <p>Carregando</p>

  return (
    <>
      <Header />
      <h4>{continent.description || "never"}</h4>
      <Flex 
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
          bgImage={`url(${continent.image})`}
          bgRepeat="no-repeat"
        >
        <Heading  
            color="light.400"
            fontSize={["xl", "4xl"]}
            fontWeight="medium"
            lineHeight="base"
        >
            {continent.name}
        </Heading>
        </Flex>

        {/* descriptions and data */}
        <Flex>

        </Flex>
        
        {/* cards */}
        <Grid>
            
        </Grid> 

      </Flex>    

    </>
  )
}

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(`http://localhost:3333/continents`);
  const {data} = response;

  const paths = data.map((dataContinent: ContinentProps) => {
    return {params: { id: dataContinent.id}}
  })

  return {
    paths,
    //FALLBACK
    // true, quando é passado um valor diferente do gerado na build, ele consultana api se o valor existe
    // false, traz apenas as paginas geradas estaticamente na build
    fallback: false, 
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  const response = await axios.get(`http://localhost:3333/continents/${id}`);
  const {data} = response;

  return { 
    props: {
      continent: data
    },
    revalidate: 10 // 10seg
   }
}
