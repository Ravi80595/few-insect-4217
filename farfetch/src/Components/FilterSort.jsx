// import { Checkbox, Input,CheckboxGroup,Container,Box,Stack,Text } from '@chakra-ui/react';
// import React, { useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import styled from 'styled-components';
// import FilterBox from './FilterBox';

// const FilterSort = () => {
//   // const [searchParams,setSearchParams]=useSearchParams();
// //   const[sortBy,setSortBy]=useState(searchParams.getAll('sortBy') || "")
// // const [category,setCategory]=useState(searchParams.getAll('genre') || [])
// // const [height,setHeight]=useState(false)
// // const [box2,setBox2]=useState(false)


// // const handleSort=(e)=>{
// //   setSortBy(e.target.value)
// // }

// // const tooglebrand=()=>{
// //     if(!height){
// //         setHeight(true) 
// //     }else{
// //         setHeight(false)
// //     }
// // }

// // const toogleBox2=()=>{
// //     if(!box2){
// //         setBox2(true)
// //     }else{
// //         setBox2(false)
// //     }
// // }


// // const handelfilter=(e)=>{
// //   const options=e.target.value
// //   let newCategory=[...category]
// //   if(newCategory.includes(options)){
// //     newCategory.splice(newCategory.indexOf(options),1)
// //   }else{
// //     newCategory.push(options)
// //   }
// //   setCategory(newCategory)
// // }
// // useEffect(()=>{
// //   const params={}
// //   category && (params.genre=category)
// //   sortBy && (params.sortBy=sortBy)
// //   setSearchParams(params)
// // },[category,setSearchParams,sortBy])

//   return (
    
//     <div>
//       <FilterBox categorys={"Category"} value1={"shoes"} value2={'skirts'} value3={'trouser'}
//       value4={"suits"} value5={"Wskirts"}/>
//       <FilterBox categorys={"Brand"}/>
//       <FilterBox categorys={"Size"} value1={"brand"} value2={''} value3={''}/>
//       <FilterBox categorys={"Color"} value1={"brand"} value2={''} value3={''}/>
//       <FilterBox categorys={"Discount"} value1={"brand"} value2={''} value3={''}/>
//       <FilterBox categorys={"Price"} value1={"brand"} value2={''} value3={''}/>
//       <FilterBox categorys={"Conscious"} value1={"brand"} value2={''} value3={''}/>
//     </div>

// //     <div style={{width:'100%'}}>
// // <BrandWrapper>
// //     <Box onClick={tooglebrand}>Category</Box>
// //     { height && 
// //     <Box>
// //         <Container>
// //             <CheckboxGroup>
// //             <Stack spacing={[1, 2]} direction={['column', 'column']}>
// //             <Checkbox defaultChecked={category.includes('ravi')} 
// //             onChange={handelfilter}
// //             value='ravi'
// //             >K pop</Checkbox>
// //             <Checkbox isChecked={category.includes('K-Pop')} 
// //             onChange={handelfilter}
// //             >Ravi</Checkbox> 
// //             <Checkbox defaultChecked={category.includes("aman")}
// //             onChange={handelfilter}
// //             >Aman</Checkbox>   
// //             </Stack>
// //             </CheckboxGroup>    
// //         </Container>
// //     </Box>
// //     }
// //     </BrandWrapper>
// //     <BrandWrapper>
// //     <Box onClick={toogleBox2}> Brand</Box>
// //     { box2 && 
// //     <Box>
// //         <Container>
// //             <CheckboxGroup>
// //             <Stack spacing={[1, 2]} direction={['column', 'column']}>
// //             <Checkbox defaultChecked={category.includes('ravi')} 
// //             onChange={handelfilter}
// //             value='ravi'
// //             >K pop</Checkbox>
// //             <Checkbox isChecked={category.includes('K-Pop')} 
// //             onChange={handelfilter}
// //             >Ravi</Checkbox> 
// //             <Checkbox defaultChecked={category.includes("aman")}
// //             onChange={handelfilter}
// //             >Aman</Checkbox>   
// //             </Stack>
// //             </CheckboxGroup>    
// //         </Container>
// //     </Box>
// //     }
// //     </BrandWrapper>
// //     <h1>Sort</h1>
// //       <div onChange={handleSort}>
// //         <div>
// //           <input type="radio" value='asc' name='sortBy' 
// //           defaultChecked={sortBy==='asc'}
// //           />
// //           <label> Ascending</label>
// //         </div>
// //         <div>
// //           <input type="radio" value='desc' name='sortBy'
// //           defaultChecked={sortBy==='desc'} />
// //           <label> Descending</label>
// //         </div>
// //       </div> 




//       /* <h2>Filter</h2>
//       <div>
//         <input type="checkbox" value="K-Pop" 
//         defaultChecked={category.includes('K-Pop')}
//         onChange={handelfilter} />
//         <label> K-POP</label>
//         <div>
//         <input type="checkbox" value="Pop"
//         defaultChecked={category.includes('Pop')}
//         onChange={handelfilter} />
//         <label> POP</label>
//         </div>
//         <div>
//         <input type="checkbox" value="Country"
//         defaultChecked={category.includes('Country')}
//         onChange={handelfilter} />
//         <label> Country</label>
//         </div>
//         <div>
//         <input type="checkbox" value="Holiday"
//         defaultChecked={category.includes('Holiday')}
//         onChange={handelfilter} />
//         <label>Holiday</label>
//         </div>
//       </div>
//       <h1>Sort</h1>
//       <div onChange={handleSort}>
//         <div>
//           <input type="radio" value='asc' name='sortBy' 
//           defaultChecked={sortBy==='asc'}
//           />
//           <label> Ascending</label>
//         </div>
//         <div>
//           <input type="radio" value='desc' name='sortBy'
//           defaultChecked={sortBy==='desc'} />
//           <label> Descending</label>
//         </div>
//       </div> */
//     // </div>
//   )
// }

// const BrandWrapper=styled.div`
// border-bottom: 2px solid black;
// font-size:5px;
// // text-align:center;
// margin:10px;
// width:80%;
// `

// export default FilterSort
