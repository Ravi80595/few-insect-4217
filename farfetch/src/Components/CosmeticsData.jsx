// import { Container } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import styled from 'styled-components'

const CosmeticsData = () => {

    const data=useSelector((store)=>store.AppReducer.products)
    // console.log(data)
  return (
    <ContainerWraper>
      {
        data.map(item=>{
          return(
                <ProductCard key={item.id} item={item} />
          )
      })
     }
    </ContainerWraper>
  )
}

const ContainerWraper = styled.div`
  display:grid;
  margin-top:50px;
  grid-template-columns:repeat(3,1fr);

`;

export default CosmeticsData
