import styles from "./Nav.module.css"
import {HamburgerIcon} from "@chakra-ui/icons"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerCloseButton,
    Image,
    Tabs,
    TabList,
    Tab,
    Text,
    Flex,
    Box
  } from '@chakra-ui/react'
import mobLogo from "../../assets/mobLogo.jpeg"
import { BsBag } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";

const MobNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Button p="8px" color="black" bg="white" onClick={onOpen}>
        <HamburgerIcon  w="30px" h="30px" />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton/>
          <Image w="50px" src={mobLogo} />
            <Tabs mt="10px" defaultIndex={1}>
            <TabList>
                <Tab>WOMEN</Tab>
                <Tab>MEN</Tab>
                <Tab>KIDS</Tab>
            </TabList>
            </Tabs>
          <DrawerBody>
            <Flex mt="5px" gap="10px" direction="column" >
                <Text>Gifts</Text>
                <Text>New In</Text>
                <Text>Brands</Text>
                <Text>Clothing</Text>
                <Text>Shoes</Text>
                <Text>Sneakers</Text>
                <Text>Bags</Text>
                <Text>Accessories</Text>
                <Text>Watches</Text>
                <Text>Sale</Text>
            </Flex>
            <Text mt="15px">MY ACCOUNT</Text>
            <Flex direction="column">
                <Button mt="10px" bg="white" border="1px solid black">Sign In</Button>
                <Button mt="10px" bg="white" border="1px solid black">Register</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box>
        <Text fontSize="24px" fontWeight="bold">CLOFETCH</Text>
      </Box>
      <Flex gap="10px" mr="10px">
        <IoIosHeartEmpty className={styles.logo} />
        <BsBag className={styles.logo} />
      </Flex>
    </Flex>
  );
};

export default MobNav;
