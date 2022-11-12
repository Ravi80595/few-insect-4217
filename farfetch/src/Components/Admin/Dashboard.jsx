import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import { BsTagsFill } from "react-icons/bs";
import { FaRupeeSign,FaUserAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { DeleteIcon,EditIcon } from '@chakra-ui/icons'
import {Box,
        Button, 
        Flex,
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalBody,
        ModalCloseButton,
        useDisclosure,
        Input,
        Select,
        Spinner 
    } from '@chakra-ui/react';
import axios from 'axios';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Dashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [searchParams,setSearchParams]=useSearchParams()
    const [sort,setSort]=useState("")
    const [activeSort,setActiveSort]=useState("")

   



    

    //.................... Fetch request.....................//



    const fetchData=()=>{
      setLoading(true)
        axios.get("http://localhost:8080/products")
        .then((res)=>{
            setData(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    //.................... Quantity Edit request.....................//

    const handleEditQ=(id)=>{
     let newQty=prompt("Enter New Quantity")
     console.log(newQty)
     if (newQty !== 0 || newQty !== null || newQty>1){
       axios.patch(`http://localhost:8080/products/${id}`,{quantity :+newQty})
       .then((res)=>{
        fetchData()
        alert("Inventory Updated");
       })
       .catch((err)=>{
        console.log(err)
       })
     }
    }

    const handleReduce=(id,qty)=>{
      axios.patch(`http://localhost:8080/products/${id}`,{quantity :qty-1})
      .then((res)=>{
        fetchData()
      })
      .catch((err)=>{
        console.log(err.message)
      })
    }

    const handleIncrease=(id,qty)=>{
      axios.patch(`http://localhost:8080/products/${id}`,{quantity :qty+1})
      .then((res)=>{
        fetchData()
      })
      .catch((err)=>{
        console.log(err.message)
      })
    }


     //.................... Price Edit request.....................//

     const handlePrice=(id)=>{

      let newPricec=prompt("Enter New Quantity")
      if (newPricec === 0) return;
      axios.patch(`http://localhost:8080/products/${id}`,{price :+newPricec})
      .then((res)=>{
       fetchData()
       alert("Inventory Updated");
      })
      .catch((err)=>{
       console.log(err)
      })

     }


     //.................... Active & Deactive request.....................//


     const handleActive=(id,status)=>{
      axios.patch(`http://localhost:8080/products/${id}`,{status:!status})
      .then((res)=>{
        fetchData()
      })
      .catch((err)=>{
        console.log(err.message)
      })
     }





    //.................... Delete request.....................//

    const handleDelete=(id)=>{
      axios.delete(`http://localhost:8080/products/${id}`)
      .then((res)=>{
        fetchData()
      })
      .then((err)=>{
        console.log(err)
      })
    }

    useEffect(()=>{
      fetchData()
    },[])



    //.................... SortBy Price request.....................//

    const handleSort=(e)=>{
      setSort(e.target.value)

      axios.get(`http://localhost:8080/products?_sort=price&_order=${sort}`)
      .then((res)=>{
        setData(res.data)
      }) 
      .catch((err)=>{
        console.log(err)
      })

    }

      //.................... SortBy status request.....................//

    const handleActiveSort=(e)=>{
      setActiveSort(e.target.value)

      axios.get(`http://localhost:8080/products?_sort=status&_order=${activeSort}`)
      .then((res)=>{
        setData(res.data)
        console.log(res.data)
      }) 
      .catch((err)=>{
        console.log(err)
      })
    }



  return (
    <>
    <div id="main_container">
      <div id="lhs">
        <div id="title_div">
          {/* <div id="logo">
            <img src="../assets/logo.png" alt="" />
          </div> */}
          <h4>CLOFETCH Admin</h4>
        </div>

        <div id="link_div">
          <div id="products_div" className="link_item link_active">
            <BsTagsFill />
            <p>Products</p>
          </div>
          <div id="orders_div" className="link_item">
            <FaRupeeSign/>
            <p>Orders</p>
          </div>
          <div id="customers_div" className="link_item">
            <FaUserAlt/>
            <p>Customers</p>
          </div>
          <div id="discounts_div" className="link_item">
            <CiDiscount1/>
            <p>Discounts</p>
          </div>
        </div>
      </div>


      <div id="rhs">
        <div id="navbar">
          <Button _hover={{bg:"#f3f4f6"}} bg="#f3f4f6" color="rgb(134, 130, 238)"><Link to="/">Log Out</Link></Button>
        </div>
        <div id="rhs_body">
          <div id="products_page" className="page active">

            <Flex mb="30px" justifyContent="space-between" alignItems="center" >
              <h4>Products</h4>
              <Box>
              <Button bg="white" border="1px solid grey"  onClick={onOpen}>+ Add Product</Button>
              <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Add Product Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Flex direction="column" gap="10px" mt="50px">
                        <label>Product Name</label>
                        <Input type="text" placeholder="Add Product Name" />
                        <label>URL</label>
                        <Input type="url" placeholder="Add Image URL" />
                        <label>Product Price</label>
                        <Input type="number" placeholder="Add Product Price" />
                        <label>Brand Name</label>
                        <Input type="text"  placeholder="Add Brand Name"/>
                        <label>Quantity</label>
                        <Input type="number" placeholder="Add Quantity" />
                        <label>Description</label>
                        <Input mb="20px" type="text" placeholder="Add Description" />
                        <Button mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Add</Button>
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
                </Modal>
              </Box>
            </Flex>

            <div className="action_div">
              <div>
                <Button bg="white" border="1px solid grey" mr="10px"  >Mens</Button>
                <Button bg="white" border="1px solid grey" mr="10px"  >Women</Button>
                <Button bg="white" border="1px solid grey" >Kids</Button>
              </div>

              <Flex gap="10px">
                <Select onChange={handleActiveSort} placeholder='Filter By'>
                    <option value='Active'>Active</option>
                    <option value='Inactive'>Inactive</option>
                </Select>

                <Select  onChange={handleSort}  placeholder='Sort by'>
                    <option value='desc'>Low To High</option>
                    <option value='asc'>High To Low</option>
                </Select>
              </Flex>
            </div>


            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Inventory</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody id="product_tbody">
                {/* <!-- items row comes here --> */}
                {data&&data.map((ele)=>(
                    <>
                    <tr key={ele.id}>
                        <td>
                            <img src={ele.image} alt="" />
                        </td>
                        <td>
                            <span>{ele.productName}</span>
                        </td>
                        <td>
                            {<Flex fontSize="15px"  ml="30px" gap="7px"  alignItems="center">
                              <Box onClick={()=>handleReduce(ele.id,ele.quantity)} _hover={{cursor:"pointer"}}>-</Box> 
                              <Box onClick={()=>handleEditQ(ele.id)}>{ele.quantity}</Box>
                              <Box fontStyle="18px" _hover={{cursor:"pointer"}} onClick={()=>handleIncrease(ele.id,ele.quantity)}>+</Box></Flex>}
                        </td>
                        <td>
                            {<Flex onClick={()=>handlePrice(ele.id)} fontSize="15px" _hover={{cursor:"pointer"}} ml="30px" gap="7px" alignItems="center">{ele.price}<EditIcon /></Flex>}
                        </td>
                        <td>
                            {ele.status?
                            <Box onClick={()=>handleActive(ele.id,ele.status)} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(39, 177, 39);" borderRadius="30px" color="white">Active</Box>
                            :<Box onClick={()=>handleActive(ele.id,ele.status)} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(238, 68, 68);" borderRadius="30px" color="white">InActive</Box>}
                        </td>
                        <td>
                            <DeleteIcon onClick={()=>handleDelete(ele.id)} w="25px" h="25px" _hover={{color:"red",cursor:"pointer"}} />
                        </td>
                    </tr>
                    </>
                ))}
              </tbody>
            </table>
            <Box w="100%" mt="50px"  textAlign="center">
                {loading&&<Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                  />}
                </Box>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
