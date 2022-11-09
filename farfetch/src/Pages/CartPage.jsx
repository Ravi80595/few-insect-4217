import React from 'react'
import {Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Tfoot,Center,Button,AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useDisclosure } from '@chakra-ui/react'
import { checkoutCart } from '../redux/CartReducer/action'
import { removeToCart } from '../redux/CartReducer/action'

const CartPage = () => {
  const CartData=useSelector((store)=>store.CartReducer.Cartitem)
  console.log(CartData)
  const dispatch=useDispatch()
  const {isOpen,onOpen,onClose}=useDisclosure()
  const cancelRef=React.useRef()


  const handleCheckout=()=>{
    dispatch(checkoutCart())
    onClose()
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
            <div>
            {CartData.map((Item)=>(
              <Tr key={Item.id}>
                <Td fontSize={{base:"xs",md:"md"}}>{Item.title}</Td>
                <Td fontSize={{base:"xs",md:"md"}}>{Item.price}</Td>
                <Td fontSize={{base:"xs",md:"md"}}>
                  <Button onClick={()=> dispatch(removeToCart(Item.id))} >Remove</Button>
                </Td>
              </Tr>
            ))}
            </div>
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
      <Center mt={{base:4,md:8}}>
        <Button onClick={onOpen}>Place order</Button>
        <AlertDialog 
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg'>
                Place Order
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure your want to place order
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
                <Button onClick={handleCheckout}>Yes</Button>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Center>
    </Box>
  )
}

export default CartPage
