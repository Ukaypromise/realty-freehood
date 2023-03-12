import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Button, Card, CardBody, Divider } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "@/utils/fetchApi";
import Property from "../components/Property"


const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Card maxW="sm" >
        <CardBody>
          <Image
            src={imageUrl}
            width={500}
            height="300"
            alt="banner"
            borderradius="lg"
          />
        </CardBody>
      </Card>
      <Box paddingLeft="15">
        <Text color="grey.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text color="grey.700" fontSize="lg" paddingTop="3" paddingBottom="3">
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize="xl" color="red">
          <Link href={linkName}>{buttonText} </Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default function Home({ propertyForSale, propertyForRent }) {
  
  return (
    <Box>
      <Flex>
        <Banner
          purpose="BUY A HOME"
          title1="Homes for"
          title2="Everyone"
          desc1="Explore Apartments, Villas, Homes"
          desc2="and more."
          buttonText="Explore"
          linkName="/search?purpose=for-rent"
          imageUrl="https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />

        <Banner
          purpose="Rent A HOME"
          title1="Get Your "
          title2="Dream Home "
          desc1="Explore Apartments, Villas, Homes"
          desc2="and more."
          buttonText="Explore"
          linkName="/search?purpose=for-sale"
          imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
      </Flex>
      <Divider p="2" />
      <Flex flexWrap="wrap" marginTop="10">
        {propertyForRent.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
      <Divider />
      <Flex flexWrap="wrap" marginTop="10">
        {propertyForSale.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
