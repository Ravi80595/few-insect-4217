import styles from "./Nav.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import {Box, Link,Text,Flex,Input} from "@chakra-ui/react"
import { useEffect } from 'react';
import { getCountries } from '../../redux/action';
import Country from './Country';
import {Search2Icon} from "@chakra-ui/icons"
import Gifts from './Gifts';

const Navbar = () => {

    const dispatch=useDispatch()
    const countries = useSelector((state)=>state.countries)
    

    useEffect(()=>{
        dispatch(getCountries)
    },[])

  return (
    <>
        <Box border="1px solid red" >
            <Flex justifyContent="space-between" alignItems="center" >
                <Flex ml="50px" gap="20px" >
                    <Link _hover={{outline:"none"}}>Women</Link>
                    <Link _hover={{outline:"none"}}>Men</Link>
                    <Link _hover={{outline:"none"}}>Kids</Link>
                </Flex>

                <Box>
                    <Text fontSize="38px" fontWeight="bold">CLOFETCH</Text>
                 </Box>

                 <Flex alignItems="center" mr="60px" gap="15px">
                    <Country countries={countries}/>
                    <CiUser className={styles.logo} />
                    <IoIosHeartEmpty className={styles.logo} />
                    <BsBag className={styles.logo}/>
                 </Flex>
            </Flex>

            <Flex mt="10px" mb="10px" justifyContent="space-between">
                <Flex gap="20px" ml="50px">
                    <Gifts name="Gifts"/>
                    <Gifts name="New In"/>
                    <Gifts name="Brands"/>
                    <Gifts name="Clothing"/>
                    <Gifts name="Shoes"/>
                    <Gifts name="Sneakers"/>
                    <Gifts name="Bags"/>
                    <Gifts name="Accessories"/>
                    <Gifts name="Watches"/>
                    <Gifts name="Sale"/>
                </Flex>

                <Flex mr="60px" w="280px" borderRadius="5px" p="8px" border="1px solid rgb(212, 209, 209)" alignItems="center">
                    <Input  placeholder='Search' variant='unstyled'/>
                    <Search2Icon ml="10px" />
                </Flex>
            </Flex>

        </Box>
    </>
  )
}

export default Navbar
