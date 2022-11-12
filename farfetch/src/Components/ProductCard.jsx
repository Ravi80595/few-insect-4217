// import {Image,Heading,Text,Button,Box } from '@chakra-ui/react'
// import React from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import "../Utils/ShopStructure.css"
// import { useSearchParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { useLocation } from 'react-router-dom'
// import { useEffect } from 'react'
// import { getData } from '../redux/AppReducer/action'


// // const ProductCard = ({item}) => {
// //   const [searchParams]=useSearchParams()
// //   const dispatch=useDispatch()
// //   const location=useLocation()

// //   useEffect(()=>{
// //     if(location){
// //       const type=searchParams.getAll('type')
// //       console.log(type)
// //       const queryParams = {
// //         params:{
// //           type:type
// //         }
// //       }
// //       dispatch(getData(queryParams))
// //     }
// //   },[location.search])


//   // console.log(item)
//   return (
//     <ProductCardWrapper>
//       <div>

//       <Image src={item.image} width={300} height={300}></Image>
//       </div>
//          <Heading as='h2' fontSize='md' height='80px' >{item.productName}</Heading>
//         <Text>Category: {item.type}</Text>
//         <Text>Price: ${item.price}</Text>
//         <Text>Rating: {item.rating}</Text>
//         <Text>Brand: {item.brandName}</Text>
//         <Link to={`/data/${item.id}`}>
//         <Button marginBottom='-5px'>More Details</Button>
//         </Link>
//     </ProductCardWrapper>
//   )
// }

// const ProductCardWrapper = styled.div`
//   // width:200px;
//   width: 300px;
//   // border:2px solid blue;
//   box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
//   margin: 10px;
//   height: 550px;
//   text-align: center;
//   line-height: 30px;
// `;


// export default ProductCard
