import {Image,Heading,Text,Button,Box } from '@chakra-ui/react'
import React from 'react'
// import { useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import "../Utils/ShopStructure.css"

const ProductCard = ({item}) => {

  return (
    <ProductCardWrapper>
      <div>

      <Image src={item.image} width={300} height={300}></Image>
      </div>
         <Heading as='h2' fontSize='lg' >{item.title}</Heading>
        <Text>{item.category}</Text>
        <Text>{item.price}</Text>
        <Link to={`/data/${item.id}`}>
        <Button marginBottom='-5px'>More Details</Button>
        </Link>
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  border:2px solid blue;
  width:200px;
  margin:10px;
  border: 2px solid blue;
  width: 289px;
  margin: 10px;
  height: 475px;
  text-align: center;
  line-height: 30px;
`;


export default ProductCard
