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
        Select 
    } from '@chakra-ui/react';
import axios from 'axios';




const Dashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData]=useState([])

    const fetchData=()=>{
        axios.get("http://localhost:8080/products")
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{

        fetchData()

    },[])




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
          <Button _hover={{bg:"#f3f4f6"}} bg="#f3f4f6" color="rgb(134, 130, 238)">Log Out</Button>
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
                <Select placeholder='Filter By'>
                    <option value='Active'>Active</option>
                    <option value='Inactive'>Inactive</option>
                </Select>

                <Select placeholder='Select option'>
                    <option value='asc'>Low To High</option>
                    <option value='desc'>High To Low</option>
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
                            <span>{ele.title}</span>
                        </td>
                        <td>
                            <span>{<Flex gap="7px" alignItems="center">{ele.rating.count}<EditIcon/></Flex>}</span>
                        </td>
                        <td>
                            <span>{<Flex gap="7px" alignItems="center">{ele.price}<EditIcon/></Flex>}</span>
                        </td>
                        <td>
                            <span>Active</span>
                        </td>
                        <td>
                            <span>{<DeleteIcon/>}</span>
                        </td>
                    </tr>
                    </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
