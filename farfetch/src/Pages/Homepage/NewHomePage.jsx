import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Flex,Button,Box,Image,Text,Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FooterContainer } from '../Footer/containers/footer'

const NewHomePage = () => {
  return (
    <>
    <Navbar/>
    <Flex color='black' w='90%' ml={["auto",'auto','10']} mt='10' direction={['column','column','row']} >
        <Box w='80%' m='auto' >
        <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4017102/data/b271794d1e368cacbb73b7fdd1fb3251/1x1_messaging-side/637/data.jpeg' alt='Dan Abramov' w='100%' m='auto' />
        </Box>
        <Box w='50%' m='auto'  align='center'  >
            <Text fontSize={['xl','3xl','6xl']}pt='10'lineHeight='1.2' fontWeight='bold'>22% OFF YOUR <br/> NEW WARDROBE</Text>
            <br />
            <Text fontSize='lg'  >For a limited time only, you can shop the world's most <br/>
            iconic brands with 22% off.Offer available on selected <br/>
            full-price items</Text>
            <br/>
            <Link to = "/shop">
            <Button colorScheme='teal' variant='outline'>Shop Now</Button>   
            </Link> 
        </Box>
    </Flex>

                            {/* 2nd Box Correction */}

    <Flex color='black' w='90%' ml='20' mt='10' gap='20' direction={['column-reverse','column','row']} >
        <Box w='80%' h='400px' textAlign={['center','center','center']} mr='3' align='center' >
            <Text fontSize={['xl','3xl','4xl']} pt={['0','0',"40"]} lineHeight='1' textAlign='left'>Party hearder: amped-up looks for every occasion</Text><br />
            <Text fontSize='lg' >Time to throw out the partywear rule book: introducing high-impact knits,<br/>
            offbeat separates and unexpected suiting for the the freshest take on event dressing</Text>
            <br/>
            <Button colorScheme='teal' variant='outline'>Explore More</Button>  
        </Box>
        <Box w='80%'   >
            <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4031242/data/45e16e8da13efd90af974a6bf3e3c3d6/1x1_messaging-side/637/data.jpeg' alt='Dan Abramov' w='100%'  />
        </Box>
    </Flex>

                     {/* 3rd Box Correction */}
      
    <Flex color='black' w='90%' ml='20'  gap='16px' direction={['column-reverse','column','row']}>
        <Box w='80%'   >
            <Image boxSize='500px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4031482/data/46ff3c7a489afe1661d7f5a19c6d7601/1x1_two-columns/637/data.jpeg' alt='Dan Abramov' w='100%'  />
            <Text fontSize='lg' align='flex-start' m='0' >75 STATEMENT SHIRTS</Text>
            <Text fontSize='lg' align='flex-start' >From Valentino's in-demand hot pink shade to Casablanca's iconic printed <br/>
            styles,these shirts are made to noticed this season</Text>
        </Box>
        <Box w='80%' h='600px'   >
            <Image boxSize='600px' src='https://cdn-images.farfetch-contents.com/18/98/13/19/18981319_41334424_1000.jpg' alt='Dan Abramov' w='100%'  />
        </Box>
    </Flex>
                            {/* 4th Box Correction */}

    <Flex  w='90%' ml={['auto',"0",'20']} mt='10' direction={['column','column','row']}>
        <Box p='4' >
            <Text fontSize='lg'>New in: hand-picked daily from the world’s best brands and boutiques</Text>
        </Box>
             <Spacer />
            <Button colorScheme='teal' variant='outline'>Shop Now</Button>
    </Flex>

    <Flex  w='90%' m='auto' mt='10' mb='10' gap="20px" direction={['column','column','row']} >
        <Box>
            <Image src='https://cdn-images.farfetch-contents.com/18/32/64/57/18326457_42274704_600.jpg'></Image>
            <Text align='center'>New Season</Text>
            <Text align='center'>VETEMENTS</Text>
            <Text align='center'>reversible hooded bomber jacket</Text>
            <Text align='center'>$3,714</Text>
        </Box>
        <Box>
            <Image src='https://cdn-images.farfetch-contents.com/18/94/45/72/18944572_42200205_600.jpg'></Image>
            <Text align='center'>New Season</Text>
            <Text align='center'>VETEMENTS</Text>
            <Text align='center'>reversible hooded bomber jacket</Text>
            <Text align='center'>$3,714</Text>
        </Box>
        <Box>
            <Image src='https://cdn-images.farfetch-contents.com/19/21/45/96/19214596_42311424_600.jpg'></Image>
            <Text align='center'>New Season</Text>
            <Text align='center'>VETEMENTS</Text>
            <Text align='center'>reversible hooded bomber jacket</Text>
            <Text align='center'>$3,714</Text>
        </Box>
        <Box>
            <Image src='https://cdn-images.farfetch-contents.com/19/21/83/52/19218352_42138221_600.jpg'></Image>
            <Text align='center'>New Season</Text>
            <Text align='center'>VETEMENTS</Text>
            <Text align='center'>reversible hooded bomber jacket</Text>
            <Text align='center'>$3,714</Text>
        </Box>
    </Flex>

                        {/* 5th Box Correction */}

    <Flex color='black' w='90%' ml='20' mt='20' direction={['column-reverse','column','row']} >
       <Box w='80%' h='600px'  align='center' >
           <Text fontSize='4xl'pt={['10','0','40']} pb='0' lineHeight={1} fontWeight='bold'>THE TRIPLE<br/> STITCH SNEAKER</Text><br/>
           <Text fontSize='lg' >Shop Zegna</Text><br/>
       </Box>
       <Box w='80%'   >
             <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3954094/data/38be8fc7e035a1d343e9472e3b4f5836/3x4_messaging-side/936/data.jpeg'  />
       </Box>
   </Flex>
                             {/* 6th Box Correction */}

    <Text fontSize='3xl' align={'center'} mt={['-80','0','10']}>Shop gifts by category</Text>
    <Flex  w='90%' ml={["5",'0','20']} mt='10' gap='20px' direction={['column','column','row']}>
        <Box>
            <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3994250/data/d3e4fad9935619d4ec115e26efee9777/3x4_three-columns/480/data.jpeg'></Image>
            <Text align='center' m='5'>CLASSIC GIFTS</Text>
        </Box>
        <Box>
            <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3982722/data/79e434c40461462c303e26b85707e95f/3x4_three-columns/480/data.jpeg'></Image>
            <Text align='center' m='5'>WATCHES & JEWELLERY</Text>
        </Box>
        <Box>
            <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3994310/data/a4643e0d498e0be675bff5e935602428/3x4_three-columns/480/data.jpeg'></Image>
            <Text align='center' m='5'>SMALL LEATHER GOODS</Text>
        </Box>
    </Flex>                       
                                 {/* 7th Box Correction */}


    <Flex  w='90%' ml={['auto',"0",'20']} mt='10'>
        <Box p='4' >
            <Text fontSize='xl'>Trending now: most-wanted gifts</Text>
        </Box>
         <Spacer />
         <Button colorScheme='teal' variant='outline'>Shop Now</Button>
    </Flex>                  
                            {/* 8th Box Correction */}

    <Flex  w='90%' m='auto' mt='10' mb='10' gap="20px" direction={['column','column','row']} >
        <Box>
            <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3994250/data/d3e4fad9935619d4ec115e26efee9777/3x4_three-columns/480/data.jpeg'></Image>
            <Text align='center'>New Season</Text>
            <Text align='center'>VETEMENTS</Text>
            <Text align='center'>reversible hooded bomber jacket</Text>
            <Text align='center'>$3,714</Text>
        </Box>
        <Box>
            <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3994310/data/a4643e0d498e0be675bff5e935602428/3x4_three-columns/480/data.jpeg'></Image>
            <Text align='center'>New Season</Text>
            <Text align='center'>VETEMENTS</Text>
            <Text align='center'>reversible hooded bomber jacket</Text>
            <Text align='center'>$3,714</Text>
        </Box>
        <Box>
            <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3982722/data/79e434c40461462c303e26b85707e95f/3x4_three-columns/480/data.jpeg'></Image>
            <Text align='center'>New Season</Text>
            <Text align='center'>VETEMENTS</Text>
            <Text align='center'>reversible hooded bomber jacket</Text>
            <Text align='center'>$3,714</Text>
        </Box>
        <Box>
            <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3994250/data/d3e4fad9935619d4ec115e26efee9777/3x4_three-columns/480/data.jpeg' ></Image>
            <Text align='center'>New Season</Text>
            <Text align='center'>CAPS</Text>
            <Text align='center'>reversible hooded bomber Cap</Text>
            <Text align='center'>$714</Text>
        </Box>
    </Flex>         
    <FooterContainer/>     
    </>
  )
}

export default NewHomePage
