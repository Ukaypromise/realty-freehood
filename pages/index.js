import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

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
      <Image src={imageUrl} width={500} height="300" alt="banner" />
      <Box>
        <Text color="grey.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text color="grey.700" fontSize="lg" paddingTop="3" paddingBottom="3">
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize="xl" color="white">
          <Link href={linkName}>{buttonText} </Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default function Home() {
  return (
    <Box>
      <Banner
        purpose="BUY OR RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more."
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <Banner
        purpose="SELL A HOME"
        title1="Sell or Rent a Home "
        title2="Dream Home "
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more."
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
    </Box>
  );
}
