import React from 'react'
import { useState,useEffect } from 'react';
import { Checkbox,CheckboxGroup,Container,Box,Stack,Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { BiDownArrowAlt } from "react-icons/bi";



const FilterBox = (props) => {
    const  {categorys,value1,value2,value3,value4,value5}=props
    const [height,setHeight]=useState(false)
    const [searchParams,setSearchParams]=useSearchParams();
    const [category,setCategory]=useState(searchParams.getAll('type') || [])

    const tooglebrand=()=>{
        if(!height){
            setHeight(true) 
        }else{
            setHeight(false)
        }
    }
    
      
    const handelfilter=(e)=>{
        const options=e.target.value
        let newCategory=[...category]
        console.log(newCategory)
        if(newCategory.includes(options)){
          newCategory.splice(newCategory.indexOf(options),1)
        }else{
          newCategory.push(options)
        }
        setCategory(newCategory)
      }


      useEffect(()=>{
        const params={}
        category && (params.type=category)
        setSearchParams(params)
      },[category,setSearchParams])
    

  return (
       <div style={{width:'100%'}}>
<BrandWrapper>
   <Flex onClick={tooglebrand} justifyContent='space-between'><Box >{categorys}</Box><BiDownArrowAlt/></Flex> 
    { height && 
    <Box borderTop='2px solid grey'>
        <Container>
            <CheckboxGroup >
            <Stack spacing={[1, 2]} direction={['column', 'column']}>
            <Checkbox defaultChecked={category.includes({value1})} style={{margin:"10px"}} 
            onChange={handelfilter}
            value={value1} 
            >{value1}</Checkbox>
            <Checkbox defaultChecked={category.includes({value2})} 
            value={value2} 
             onChange={handelfilter}
            style={{margin:"10px"}} >{value2}</Checkbox> 
            <Checkbox defaultChecked={category.includes({value3})} style={{margin:"10px"}} 
            value={value3} 
             onChange={handelfilter}
            >{value3}</Checkbox>  
            <Checkbox defaultChecked={category.includes({value4})} style={{margin:"10px"}} 
            value={value4} 
             onChange={handelfilter}
            >{value4}</Checkbox> 
            {/* <Checkbox defaultChecked={category.includes({value5})} style={{margin:"10px"}} 
             onChange={handelfilter}
            >{value5}</Checkbox>   */}
            </Stack>
            </CheckboxGroup>    
        </Container>
    </Box>
    }
    </BrandWrapper>
    </div>
  )
}
const BrandWrapper=styled.div`
// border-bottom: 2px solid black;
font-size:18px;
// text-align:center;
margin:20px;
margin-left:10px;
width:80%;
`

export default FilterBox
