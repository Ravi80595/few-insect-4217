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
import heroImg1 from "../../assets/heroImg1.jpg"
import heroImg2 from "../../assets/heroImg2.jpg"
import heroImg3 from "../../assets/heroImg3.jpg"
import heroImg4 from "../../assets/heroImg4.jpg"
import heroImg5 from "../../assets/heroImg5.jpg"
import heroImg6 from "../../assets/heroImg6.jpg"
import heroImg7 from "../../assets/heroImg7.jpg"
import heroImg8 from "../../assets/heroImg8.jpg"
import heroImg9 from "../../assets/heroImg9.jpg"
import heroImg10 from "../../assets/heroImg10.jpg"
import MobNav from "./MobNav";
import Login from "../Login/Login";

const Navbar = () => {
    const dispatch=useDispatch()
    const countries = useSelector((state)=>state.countries)
    

    useEffect(()=>{
        dispatch(getCountries)
    },[])

  return (
    <>
        <div className={styles.mainDiv}>
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
                    <Login />
                    <IoIosHeartEmpty style={{marginRight:"10px"}} className={styles.logo} />
                    <BsBag className={styles.logo}/>
                 </Flex>
            </Flex>

            <Flex mt="10px" mb="10px" justifyContent="space-between">
                <Flex gap="20px" ml="50px">
                    <Gifts name="Gifts" img={heroImg1}/>
                    <Gifts name="New In" img={heroImg2}/>
                    <Gifts name="Brands" img={heroImg3}/>
                    <Gifts name="Clothing" img={heroImg4}/>
                    <Gifts name="Shoes" img={heroImg5}/>
                    <Gifts name="Sneakers" img={heroImg6}/>
                    <Gifts name="Bags" img={heroImg7}/>
                    <Gifts name="Accessories" img={heroImg8}/>
                    <Gifts name="Watches" img={heroImg9}/>
                    <Gifts name="Sale" img={heroImg10}/>
                </Flex>

                <Flex mr="60px" w="280px" borderRadius="5px" p="8px" border="1px solid rgb(212, 209, 209)" alignItems="center">
                    <Input  placeholder='Search' variant='unstyled'/>
                    <Search2Icon ml="10px" />
                </Flex>
            </Flex>
        </div>

        <div className={styles.mobileDiv}>
            <MobNav />
        </div>
    </>
  )
}

export default Navbar
