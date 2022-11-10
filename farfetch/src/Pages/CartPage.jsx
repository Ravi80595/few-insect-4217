import React from 'react'
import {Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Tfoot,Center,Button,AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter,Container} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useDisclosure } from '@chakra-ui/react'
import { checkoutCart } from '../redux/CartReducer/action'
import { removeToCart } from '../redux/CartReducer/action'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const CartData=JSON.parse(localStorage.getItem("CartData")) 
  
  // const dispatch=useDispatch()
  // const {isOpen,onOpen,onClose}=useDisclosure()
  // const cancelRef=React.useRef()


  const removeToCart=(index)=>{
    console.log(index)
   const Data1=CartData.splice(index,1)
    localStorage.setItem('CartData',JSON.stringify(Data1))  
  }

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
              <Th fontSize={{base:"xs",md:"md"}}>Price</Th>
              <Th fontSize={{base:"xs",md:"md"}}>Remove from cart</Th>
            </Tr>
          </Thead>
          <Tbody>
            
            {
              CartData.map((Item,index)=>(
              <Tr key={Item.id}>
                <Td fontSize={{base:"xs",md:"md"}}>{Item.title}</Td>
                <Td fontSize={{base:"xs",md:"md"}}>{Item.price}</Td>
                <Td fontSize={{base:"xs",md:"md"}}>
                  <Button onClick={()=>removeToCart(Item.id,index)} >Remove</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
            <Th fontSize={{base:"xs",md:"md"}}>Final Price</Th>
            <Th fontSize={{base:"xs",md:"md"}}>
              {Math.round(CartData.reduce((a,c)=>a+c.price,0))}
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
