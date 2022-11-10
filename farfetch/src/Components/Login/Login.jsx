import React from "react";
import styles from "../Navbar/Nav.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SignUp from "../Signup/SignUp";
import { useDispatch, useSelector } from 'react-redux'
import { LoginAuth } from "../../redux/Auth/action";
import { onAuthStateChanged, signOut, } from "firebase/auth";
import {auth} from "../../firebase-config"
import { useEffect } from "react";


const Login = () => {
  const [authentication,setAuthentication]=React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [email,setEmail]=React.useState("");
  const [pass,setPass]=React.useState("");
  const [userIcon,setuserIcon]=React.useState(true);

  const dispatch=useDispatch()

    const mssg= useSelector((state)=>state.Auth.isLMError)
    const isError=useSelector((state)=>state.Auth.isLError)
    const success=useSelector((state)=>state.Auth.sucess)

    useEffect(()=>{
      if(isError){
        alert(mssg)
      }

      if(success){
        alert("Welcome")
      }

    },[isError,success])


    // useEffect(()=>{
    //     onAuthStateChanged(auth,(currentUser)=>{
    //         setAuthentication(true)
    //         setuserIcon(false)
    //     })
    // },[])

    // let res=JSON.parse(sessionStorage.getItem("login"))
    // console.log(res?.user.email)


    const register=()=>{
        dispatch(LoginAuth(email,pass))
            setEmail("");
            setPass("");
    }

    const handleLogOut= async ()=>{
        await signOut(auth)
        setuserIcon(true)
        setAuthentication(false)
    }

  return (
    <Box w="35x">
      {authentication && <Button _hover={{ bg: "white" }} onClick={handleLogOut} bg="white">Logout</Button>}

      {userIcon && <Button _hover={{ bg: "white" }} onClick={onOpen} bg="white">
        <CiUser className={styles.logo} />
      </Button>}

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Come on in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs mt="10px">
              <TabList>
                <Tab>SIGN IN</Tab>
                <Tab>I'M NEW HERE</Tab>
              </TabList>
{/**************************************************************  Log In ***************************************/}
              <TabPanels>
                <TabPanel>
                  <label>Email address</label>
                  <Input placeholder="Enter email" mb="10px" mt="5px" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <label>Password</label>
                  <InputGroup mt="5px" size="md">
                    <Input
                      border="1px solid grey"
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      value={pass}
                      onChange={(e)=>setPass(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Flex mt="10px" gap="10px">
                    <Checkbox defaultChecked></Checkbox>
                    <label>
                      Keep me signed in. <Link>What's this?</Link>
                    </label>
                  </Flex>
                  <Flex mb="12px">
                    <Link mt="5px">Forgot your password?</Link>
                  </Flex>
                  <Button
                    _hover={{ bg: "rgb(65, 63, 63)" }}
                    bg="black"
                    color="white"
                    w="100%"
                    onClick={register}
                  >
                    Sign In
                  </Button>
                  <Text textAlign="center" mt="10px" fontWeight="bold">
                    OR
                  </Text>
                  <Button
                    mt="15px"
                    bg="white"
                    border="1px solid black"
                    w="100%"
                  >
                    Continue With Google
                  </Button>
                  <Button
                    mt="15px"
                    bg="white"
                    border="1px solid black"
                    w="100%"
                  >
                    Continue With Apple
                  </Button>
                  <Button
                    mt="15px"
                    bg="white"
                    border="1px solid black"
                    w="100%"
                  >
                    Continue With Facebook
                  </Button>
                </TabPanel>

{/**************************************************************  Sign Up ***************************************/}

                <SignUp />
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Login;
