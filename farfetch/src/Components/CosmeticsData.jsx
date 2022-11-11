import React from 'react'
import "../Utils/ShopStructure.css"
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getData } from '../redux/AppReducer/action'


const CosmeticsData = () => {
  const [searchParams]=useSearchParams()
    const dispatch=useDispatch()
  const data=useSelector((store)=>store.AppReducer.products)
  const location=useLocation()


  useEffect(()=>{
    if(location || data.length===0){
      const type=searchParams.getAll('type')
      const queryParams = {
        params:{
          type:type
        }
      }
      dispatch(getData(queryParams))
    }
  },[location.search])

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
