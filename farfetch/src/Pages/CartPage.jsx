import React from 'react'
import {Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Tfoot,Center,Button,AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter,Container,Flex,Text, useStatStyles} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useDisclosure } from '@chakra-ui/react'
import { checkoutCart } from '../redux/CartReducer/action'
import { removeToCart } from '../redux/CartReducer/action'
import { Link } from 'react-router-dom'
import "../Utils/ShopStructure.css"
import { useState } from 'react'

const CartPage = () => {
  const CartData=JSON.parse(localStorage.getItem("CartDatas")) 
  const [quan,setQuan]=useState('1')
  // const CData=useSelector((store)=>store.CartReducer.state)
  // console.log(CData)
  
  const dispatch=useDispatch()
  // const {isOpen,onOpen,onClose}=useDisclosure()
  // const cancelRef=React.useRef()

  const handleIncrease=()=>{
    setQuan(Number(quan)+1)
    
  }
  const handledecrease=()=>{
    setQuan(Number(quan)-1)
  }


  const removeToCart=(index)=>{
    console.log(index)
    let Cart=JSON.parse(localStorage.getItem("CartDatas")) 
    console.log(Cart)
    let Data1=Cart.splice(index,1)
    localStorage.setItem('CartDatas',JSON.stringify(Data1))  
  }

  // const dat=[]
  // const checkout=()=>{
  //   localStorage.setItem("CartDatas",JSON.stringify(dat))
  // }
  return (
    <Box>
      <TableContainer mt={{base:20,sm:20,md:28,lg:32}}>
        <Table 
        variant="simple"
        colorScheme="gray"
        size={{base:"sm",sm:"sm",md:"md",lg:"lg"}}
        >
          <Thead>
            <Tr>
              <Th fontSize={{base:"xs",md:"md"}}>Product</Th>
              {/* <Th fontSize={{base:"xs",md:"md"}}>Quantity</Th> */}
              <Th fontSize={{base:"xs",md:"md"}}>Price</Th>
              <Th fontSize={{base:"xs",md:"md"}}>Remove from cart</Th>
            </Tr>
          </Thead>
          <Tbody>
            
            {
              CartData.map((Item,index)=>(
              <Tr key={Item.id}>
                <Td fontSize={{base:"xs",md:"md"}}>{Item.productName}</Td>
                {/* <Td> */}
                {/* <Flex>  
                  <Button  onClick={handleIncrease} className='QuanBox' fontSize='25px'>+</Button>
                  <Text p={3} fontSize="25px">{quan}</Text>
                  <Button disabled={quan<2} onClick={handledecrease} className='QuanBox' fontSize='25px'>-</Button>
                </Flex> */}

                {/* </Td> */}
                <Td fontSize={{base:"xs",md:"md"}}>${`${Math.round(Item.price * quan)}`}</Td>
                <Td fontSize={{base:"xs",md:"md"}}>
                  <Button onClick={()=>removeToCart(index)} >Remove</Button>
                </Td>
              </Tr>
            ))}
            {/* let r={Math.round(CartData.reduce((a,c)=>a+c.price,0))} */}
          </Tbody>
          <Tfoot>
            <Tr>
            <Th fontSize={{base:"xs",md:"md"}}>Final Price</Th>
            <Th fontSize={{base:"xs",md:"md"}}>
              {Math.round(CartData.reduce((a,c)=>a+c.price,0))}
              {
              
                
              }
            </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Container>
        <Link to="/payment">
        <Button>Checkout</Button>
        </Link>
      </Container>
      
    </Box>
  )
}

export default CartPage
