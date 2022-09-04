import { 
  Box,
  Heading,
  Text
  } from "@chakra-ui/react";
import {
  FaUserFriends,
  FaPlay 
} from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5'
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import { FiHelpCircle } from 'react-icons/fi';
import { useContext } from "react";
import { QuizContext } from "../../Helpers/Contexts";
import { Link, useNavigate } from 'react-router-dom';

 const Home = () => {
    const navigate = useNavigate();
    const { 
      setName,
      setCurrQuestion,
      setScore,
      setPoint,
      ButtonSound,
      sfxMode 
    } = useContext(QuizContext)

    const play = () => {
      new Audio(ButtonSound).play()
    }

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

    const iconStyle = {
      bgColor: 'blue.800',
      padding: '8px',
      borderRadius: '100%',
      marginRight: '15px',
      fontSize: '1.2rem',
      color: '#fff'
    }

    const resetName = () => {
      sfxMode && play();
      setName('')
    }

    const playFunc = () => {
      sfxMode && play();
      navigate('/dashboard');
      setCurrQuestion(0);
      setScore(0);
      setPoint(0);
    }

    const multiFunc = () => {
      sfxMode && play();
      navigate('/multiplayer');
      setCurrQuestion(0);
      setScore(0);
      setPoint(0);
    }

return (
<Box sx={{
    height: '100vh',
    bgColor: 'blue.800',
    color: '#fff',
}}>
    <Box sx={{
        maxW: '700px',
        m: '0 auto',
        h: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px 0',
        alignItems: 'center',
        flexDir: 'column'
    }}>
        {/* Header component */}
        <Link to={'/'}>
          <Heading onClick={resetName}>Kwiz</Heading>
        </Link> 

        {/* Buttons component */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>

        <Box onClick={playFunc} sx={flexStyle}>
            <Text sx={iconStyle}><FaPlay /></Text>
            <Text color={'blue.800'}>Play Quiz</Text>
        </Box>

        <Box onClick={multiFunc} sx={flexStyle}>
            <Text sx={iconStyle}><FaUserFriends /></Text>
            <Text>Multiplayer</Text>
        </Box>

        <Box onClick={() => {
          sfxMode && play();
          navigate('/settings');
        }} sx={flexStyle}>
            <Text sx={iconStyle}><IoSettings /></Text>
            <Text>Settings</Text>
        </Box>
      </Box>

        {/* Footer component */}
        <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <Box onClick={() => {
            sfxMode && play();
          }} sx={{
             margin: '0 10px',
             display: 'flex',
             alignItems: 'center'
            }}
          ><Text sx={{
            mr: '5px'
          }}><FiHelpCircle /></Text>
            <Text>Help</Text>
        </Box>
        
        <Link to={'/about'}>
          <Box onClick={() => {
              sfxMode && play();
            }} sx={{
             margin: '0 10px',
             display: 'flex',
             alignItems: 'center'
            }}
          ><Text sx={{
            mr: '5px'
          }}><BsFillChatLeftDotsFill /></Text>
            <Text>About</Text>
          </Box>
        </Link>
        </Box>
    </Box>
</Box>
)
}
 
export default Home