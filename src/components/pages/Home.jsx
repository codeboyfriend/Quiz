import { 
  Box,
  Heading,
  Text
  } from "@chakra-ui/react";
import {
  FaUserFriends,
  FaPlay,
  FaBoxes,
  FaFacebookMessenger 
} from 'react-icons/fa';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
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
      soundMode 
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
      // eslint-disable-next-line
      {
        soundMode && play();
      }
      setName('')
    }

    const playFunc = () => {
      // eslint-disable-next-line
      {
        soundMode && play();
      }
      navigate('/dashboard');
      setCurrQuestion(0);
      setScore(0);
      setPoint(0);
    }

    const multiFunc = () => {
      // eslint-disable-next-line
      {
        soundMode && play();
      }
      navigate('/multiplayer');
      setCurrQuestion(0);
      setScore(0);
      setPoint(0);
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
          // eslint-disable-next-line
          {
            soundMode && play();
          }
          navigate('/settings');
        }} sx={flexStyle}>
            <Text sx={iconStyle}><FaBoxes /></Text>
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
            soundMode && play();
          }} sx={{
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
          <Box onClick={() => {
              soundMode && play();
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