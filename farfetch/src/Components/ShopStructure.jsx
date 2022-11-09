import React, { useEffect } from 'react'
import "../Utils/ShopStructure.css"
import {Box,Container,Flex,Heading,Select} from "@chakra-ui/react"
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { getData } from '../redux/AppReducer/action'
import CosmeticsData from './CosmeticsData'

const ShopStructure = () => {
  const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getData())
},[])

  return (
    <div border='2px solid red' width='100%'>
      <Flex>
        {/* <Box width='20%'> */}
        <FilterWrapper>
            <Heading as="h2" size="md" mb='50px'>Filters</Heading>
            <Box>
                <Container className='Filter_Selectr'><Select>
                    <option value="">Category</option>
                    <option value="">Category</option>
                    <option value="">Category</option>
                    <option value="">Category</option>
                    </Select></Container>
                <Container className='Filter_Selectr'><Select></Select></Container>
                <Container className='Filter_Selectr'><Select></Select></Container>
                <Container className='Filter_Selectr'><Select></Select></Container>
                <Container className='Filter_Selectr'><Select></Select></Container>
                <Container className='Filter_Selectr'><Select></Select></Container>
            </Box>
        </FilterWrapper>
        <ProductsWrapper>
            <CosmeticsData />
        </ProductsWrapper>
      </Flex>
    </div>
  )
}

const FilterWrapper = styled.div`
  width: 20%;
  height: 600px;
  margin-top:120px;  
  position:fixed; 
`;

const ProductsWrapper = styled.div`
  width:100%;
  margin-left:22%;
  postition:relative;
  margin-top:'30px'
`;

export default ShopStructure
