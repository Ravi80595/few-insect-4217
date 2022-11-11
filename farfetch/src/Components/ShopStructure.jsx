import React, { useEffect } from 'react'
import "../Utils/ShopStructure.css"
import {Box,Container,Flex,Heading,Select} from "@chakra-ui/react"
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { getData } from '../redux/AppReducer/action'
import CosmeticsData from './CosmeticsData'
import FilterSort from './FilterSort'
import FilterBox from './FilterBox'

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
        <h2> <b> Filters ></b></h2>
            <div>
      <FilterBox categorys={"Category"} value1={"shoes"} value2={'skirts'} value3={'trouser'}
      value4={"suits"}/>
      <FilterBox categorys={"Brand"}/>
      <FilterBox categorys={"Size"} value1={"brand"} value2={''} value3={''}/>
      <FilterBox categorys={"Color"} value1={"brand"} value2={''} value3={''}/>
      <FilterBox categorys={"Discount"} value1={"brand"} value2={''} value3={''}/>
      <FilterBox categorys={"Price"} value1={"brand"} value2={''} value3={''}/>
      <FilterBox categorys={"Conscious"} value1={"brand"} value2={''} value3={''}/>
    </div>
            {/* <FilterSort/> */}
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
  margin-top:70px;  
  // margin=left:10px;
  margin-left: 20px;
  position:fixed; 
`;

const ProductsWrapper = styled.div`
  width:100%;
  margin-left:22%;
  postition:relative;
  margin-top:'30px'
`;

export default ShopStructure
