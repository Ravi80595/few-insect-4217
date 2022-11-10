import React from 'react'
import { Flex,Box,Heading,Input,Container,FormLabel,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Payment = () => {


  return (
    <Box>
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
                <FormLabel>Last Name*</FormLabel>
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
                <FormLabel>Phone*</FormLabel>
                <Input m='10px'></Input>
            </Container>
            </Flex>
            </Container>
            </Box>
            <Box border='2px solid blue' width='300px' height='400px' mt='20px'>
            <Heading as='h3' size='md' textAlign='center'>Summary</Heading> 
            <Box>
                <Link to="/paymentpage2">
                <Button mt='300px' ml='60px'>Save and Continue</Button>
                </Link>
            </Box>
            </Box>
        </Flex>
      
    </Box>
  )
}

export default Payment
