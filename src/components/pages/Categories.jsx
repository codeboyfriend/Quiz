import { 
    Box,
    Heading,
    Text 
} from "@chakra-ui/react";
import { useContext } from "react";
import { QuizContext } from "../../Helpers/Contexts";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Level from "../Level";
import Tags from "../Tags";

const Categories = () => {
    const { 
        ButtonSound,
        soundMode,
        setSoundMode,
        sfxMode,
        setSfxMode 
    } = useContext(QuizContext);

    const play = () => {
        new Audio(ButtonSound).play()
    }

  return (
    <Box sx={{
        h: '100vh',
        bg: 'blue.800',
        color: '#fff',
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        p: '40px 0' 
    }}>
        <Box sx={{
        minW: '300px',    
        maxW: '700px',
        textAlign: 'center',
        border: '1px solid #fff',
        m: '0 15px',
        borderRadius: "10px",
        overflow: 'hidden'
    }}>
        <Heading  sx={{
            bgColor: '#fff',
            color: 'blue.800',
            p: '10px'
          }}>Settings</Heading>

        <Box sx={{
            mb: '40px',
            p: '20px 10px'
        }}>
            <Tags />
            <Level />

            <Box sx={{
                textAlign: 'start',
                m: '10px 0'
            }}>
                <Text 
                  onClick={() => setSoundMode(!soundMode)}>Sound: 
                  <button style={{
                    backgroundColor: '#fff',
                    color: '#2a4365',
                    fontSize: '12px',
                    fontWeight: '500',
                    padding: '3px 10px',
                    marginLeft: '15px'
                  }}>{soundMode ? 'Off' : 'On'}</button>
                </Text>
            </Box>

            <Box sx={{
                textAlign: 'start',
                m: '10px 0'
            }}>
                <Text 
                  onClick={() => setSfxMode(!sfxMode)}>SFX: 
                  <button style={{
                    backgroundColor: '#fff',
                    color: '#2a4365',
                    fontSize: '12px',
                    fontWeight: '500',
                    padding: '3px 10px',
                    marginLeft: '15px'
                  }}>{sfxMode ? 'Off' : 'On'}</button>
                </Text>
            </Box>
        </Box>

        
        </Box>
        <Box onClick={() => {
              sfxMode && play();
            }} sx={{
            fontSize: '1.5rem',
            alignSelf: 'center',
            mt: '20px'
        }}>
            <Link to={'/home'}><FaHome /></Link>
        </Box>
    </Box>
  )
}

export default Categories