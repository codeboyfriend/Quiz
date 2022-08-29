import { 
    Box,
    Heading,
    Text,
    Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
  } from "@chakra-ui/react";
import {
    FaChartBar,
    FaUserFriends,
    FaPlay,
    FaBoxes,
    FaFacebookMessenger
    
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

 const Home = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const flexStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
        borderRadius: '20px',
        cursor: 'pointer',
        width: '250px',
        bgColor: '#fff',
        color: 'blue.800',
        margin: '5px'
    }

    const iconStyle ={
        bgColor: 'blue.800',
        padding: '8px',
        borderRadius: '100%',
        marginRight: '15px',
        fontSize: '1.2rem',
        color: '#fff'
    }

    const loadData = () => {
        navigate('/dashboard');
    }

return (
<Box sx={{
    bgColor: 'blue.800',
    color: '#fff',
}}>
    <Box sx={{
        maxW: '700px',
        m: '0 auto',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px 0',
        alignItems: 'center',
        flexDir: 'column'
    }}>
        {/* Header component */}
        <Heading>Quiz</Heading>

        {/* Buttons component */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>

        <Box onClick={
            // navigate('/dashboard')
            loadData
        } sx={flexStyle}>
            <Text sx={iconStyle}><FaPlay /></Text>
            <Text color={'blue.800'}>Play Quiz</Text>
        </Box>

        <Box sx={flexStyle}>
            <Text sx={iconStyle}><FaUserFriends /></Text>
            <Text>Multiplayer</Text>
        </Box>

        <Box sx={flexStyle}>
            <Text sx={iconStyle}><FaBoxes /></Text>
            <Text>More categories</Text>
        </Box>

        <Box sx={flexStyle} onClick={onOpen}>
            <Text sx={iconStyle}><FaChartBar /></Text>
            <Text>Highest Score</Text>
        </Box>
        </Box>

        {/* Footer component */}
        <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <Box sx={{
             margin: '0 10px',
             display: 'flex',
             alignItems: 'center'
            }}
          ><Text sx={{
            mr: '5px'
          }}><FaFacebookMessenger /></Text>
            <Text>Help</Text>
          </Box>
        
        <Link to={'/about'}>
          <Box sx={{
             margin: '0 10px',
             display: 'flex',
             alignItems: 'center'
            }}
          ><Text sx={{
            mr: '5px'
          }}><FaFacebookMessenger /></Text>
            <Text>About</Text>
          </Box>
        </Link>
        </Box>
    </Box>

    <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        motionPreset='slideInBottom'
    >
        <ModalContent sx={{
            w: '250px'
        }}>
        <ModalBody>
         <Box sx={{
             display: 'flex',
             alignItems: 'center'
            }}
            ><Text sx={{
            mr: '5px',
            fontSize: '1.8rem',
            mb: '10px'
          }}><FaChartBar /></Text>
            <Text>Highest Score :</Text>
          </Box>

          <Box><Text>120</Text></Box>
        </ModalBody>
        </ModalContent>
    </Modal>
</Box>
)
}
 
export default Home