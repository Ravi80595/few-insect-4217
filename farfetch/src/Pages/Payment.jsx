import React, { useState } from 'react'
import { Flex,Box,Heading,Input,Container,FormLabel,Button,Tr,Td,Text,Image, useStatStyles } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { FooterContainer } from './Footer/containers/footer'


const Payment = () => {
  const [length,setLength]=useState("")


    const summary=JSON.parse(localStorage.getItem("CartDatas")) 
    console.log(summary)
  return (
    <Box>
        <Navbar/>
        <Flex gap='15%'>
            <Box width='50%' boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" m='5' p='5'>  
            <Container>
            <Heading as='h2' size='sm' p='5' mb='5' textAlign='center' boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">Add Your Dilvery Address</Heading>  
            <Flex>
                <Container>
                <FormLabel>First Name*</FormLabel>
                <Input type="text" m='10px'></Input>
                </Container> 
                <Container>
                <FormLabel>Last Name</FormLabel>
                <Input m='10px'></Input>
                </Container>
            </Flex>  
            <FormLabel>Country*</FormLabel>
            <Input m='10px'></Input>
            
            <FormLabel>Address*</FormLabel>
            <Input m='10px'></Input>
            <Input m='10px'></Input>
            <Flex>
            <Container>
                <FormLabel>City*</FormLabel>
                <Input m='10px' type="text"></Input>
            </Container> 
            <Container>
                <FormLabel>State*</FormLabel>
                <Input m='10px'></Input>
            </Container>
            </Flex>
            <Flex>
            <Container>
                 <FormLabel>Zip Code*</FormLabel>
                <Input type="text" m='10px'></Input>
            </Container>
            <Container> 
                <FormLabel>Phone</FormLabel>
                <Input m='10px'></Input>
            </Container>
            </Flex>
            </Container>
            </Box>
            <Box width='350px' height='100%' mt='20px' boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
            <Heading as='h3' size='md' textAlign='center'>Summary</Heading> 
            {
              summary.map((Item)=>(
              <Box key={Item.id} display='flex' justifyContent='space-around' m='5px'>
                <div>
                <Image src={Item.image} w={10}></Image>
                <Text fontSize={{base:"xs",md:"md"}}>{Item.productName}</Text>
                </div>
                <div>
                <Text pt={1} fontSize={{base:"xs",md:"md"}}> <b> ${Item.price}</b></Text>
                </div>
              </Box>
            ))}
            <hr />
            <Flex justifyContent='space-around' pt={2}>
                <Box>Total:</Box>
                <Box><b>${Math.round(summary.reduce((a,c)=>a+c.price,0))}</b></Box>
            </Flex>
            <Box>
                <Link to="/paymentpage2">
                <Button mt='5%' ml='90px' mb={4}>Save and Continue</Button>
                </Link>
            </Box>
            </Box>
        </Flex>
      <FooterContainer/>
    </Box>
  )
}

export default Payment
