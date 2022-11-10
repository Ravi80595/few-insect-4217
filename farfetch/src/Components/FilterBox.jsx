import React from 'react'
import { useState,useEffect } from 'react';
import { Checkbox, Input,CheckboxGroup,Container,Box,Stack,Text,Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { BiDownArrowAlt } from "react-icons/bi";
 


const FilterBox = (props) => {
  const  {categorys,value1,value2,value3,value4,value5}=props
    const [height,setHeight]=useState(false)
    const [searchParams,setSearchParams]=useSearchParams();
    // const[sortBy,setSortBy]=useState(searchParams.getAll('sortBy') || "")
  const [category,setCategory]=useState(searchParams.getAll('genre') || [])

    const tooglebrand=()=>{
        if(!height){
            setHeight(true) 
        }else{
            setHeight(false)
        }
    }
    // const handleSort=(e)=>{
    //     setSortBy(e.target.value)
    //   }
    
      
    const handelfilter=(e)=>{
        const options=e.target.value
        let newCategory=[...category]
        if(newCategory.includes(options)){
          newCategory.splice(newCategory.indexOf(options),1)
        }else{
          newCategory.push(options)
        }
        setCategory(newCategory)
      }
      useEffect(()=>{
        const params={}
        category && (params.genre=category)
        // sortBy && (params.sortBy=sortBy)
        setSearchParams(params)
      },[category,setSearchParams])
    

  return (
       <div style={{width:'100%'}}>
<BrandWrapper>

   <Flex onClick={tooglebrand} justifyContent='space-between'><Box >{categorys}</Box><BiDownArrowAlt marginTop="12px"/></Flex> 
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
             onChange={handelfilter}
            style={{margin:"10px"}} >{value2}</Checkbox> 
            <Checkbox defaultChecked={category.includes({value3})} style={{margin:"10px"}} 
             onChange={handelfilter}
            >{value3}</Checkbox>  
            <Checkbox defaultChecked={category.includes({value4})} style={{margin:"10px"}} 
             onChange={handelfilter}
            >{value4}</Checkbox> 
            <Checkbox defaultChecked={category.includes({value5})} style={{margin:"10px"}} 
             onChange={handelfilter}
            >{value5}</Checkbox>  
            </Stack>
            </CheckboxGroup>    
        </Container>
    </Box>
    }
    </BrandWrapper>
    {/* <BrandWrapper>
    <Box onClick={toogleBox2}> Brand</Box>
    { box2 && 
    <Box>
        <Container> 79
            <CheckboxGroup>
            <Stack spacing={[1, 2]} direction={['column', 'column']}>
            <Checkbox defaultChecked={category.includes('ravi')} 
            onChange={handelfilter}
            value='ravi'
            >K pop</Checkbox>
            <Checkbox isChecked={category.includes('K-Pop')} 
            onChange={handelfilter}
            >Ravi</Checkbox> 
            <Checkbox defaultChecked={category.includes("aman")}
            onChange={handelfilter}
            >Aman</Checkbox>   
            </Stack>
            </CheckboxGroup>    
        </Container>
    </Box>
    }
    </BrandWrapper> */}
    {/* <h1>Sort</h1>
      <div onChange={handleSort}>
        <div>
          <input type="radio" value='asc' name='sortBy' 
          defaultChecked={sortBy==='asc'}
          />
          <label> Ascending</label>
        </div>
        <div>
          <input type="radio" value='desc' name='sortBy'
          defaultChecked={sortBy==='desc'} />
          <label> Descending</label>
        </div>
      </div>  */}

    </div>
  )
}
const BrandWrapper=styled.div`
// border-bottom: 2px solid black;
font-size:18px;
// text-align:center;
margin:10px;
margin-left:10px;
width:80%;
`

export default FilterBox
