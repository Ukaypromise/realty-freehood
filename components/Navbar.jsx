import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="red.700">
    <Box fontSize="3xl" color="red.400" fontWeight="bold">
      <Link href="/" paddingleft="2">
        FreeHood
      </Link>
    </Box>
    <Box>
      <Breadcrumb separator="" paddingLeft="20" paddingTop="5" color="red.600">
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>

        <BreadcrumbItem paddingLeft="10">
          <Link href="/search?purpose=for-sale" textDecoration="none">
            Buy Property
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem paddingLeft="10">
          <Link href="/search?purpose=for-rent">Rent Property</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
    <Spacer />

    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />
        <MenuList>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
