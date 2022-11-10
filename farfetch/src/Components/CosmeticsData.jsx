import React from 'react'
import "../Utils/ShopStructure.css"
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import styled from 'styled-components'

const CosmeticsData = () => {

    const data=useSelector((store)=>store.AppReducer.products)
    console.log(data)
  return (
    <div className='DataCard'>
      {
        data.map(item=>{
          return(
                <ProductCard key={item.id} item={item} />
          )
      })
     }
    </div>
  )
}

const ContainerWraper = styled.div`
  display:grid;
  margin-top:50px;
  grid-template-columns:repeat(3,1fr);

`;

export default CosmeticsData
