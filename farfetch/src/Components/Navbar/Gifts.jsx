import React, { useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Grid,
    GridItem,
    Image,
  } from '@chakra-ui/react'

const Gifts = (props) => {
    const {name,img}=props


  return (
    <>
        <Menu>
            <MenuButton>
                {name}
            </MenuButton>
            <MenuList >
                <Grid templateColumns='repeat(4, 1fr)'>
                        <GridItem>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                        </GridItem> 
                        <GridItem>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                        </GridItem> 
                        <GridItem>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                        </GridItem> 
                        <GridItem>
                                <Image w="250px" src={img}/>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                        </GridItem> 
                </Grid>
            </MenuList>
        </Menu>
    </>
  )
}

export default Gifts
