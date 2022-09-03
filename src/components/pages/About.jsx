import { 
    Box,
    Heading,
    Text
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../Helpers/Contexts";

const About = () => {
  const { 
    ButtonSound,
    sfxMode 
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
          maxW: '700px',
          textAlign: 'center',
          border: '1px solid #fff',
          m: '0 15px',
          borderRadius: "10px",
          overflow: 'hidden'
        }}
        >
          <Heading sx={{
            bgColor: '#fff',
            color: 'blue.800',
            p: '10px'
          }}>Kwiz</Heading>
          <Text sx={{
            fontSize: '.9rem',
            p: '20px 10px',
            textAlign: 'left'
          }}>
            Kwiz is a web application, and enable the user to undertake a series of questions on different technologies. The app is user friendly, and shall find it extremely easy to answer the multiple-choice questions. At the end of the quiz, a result-report is generated which states the score. There is also component for multiplayer with kwiz robot. 
          </Text>
        </Box>

        <Box sx={{
          mt: '20px'
        }}>
        <Link to='/home'>
            <Text onClick={() => {
              sfxMode && play();
            }} sx={{
              fontSize: '1.5rem'
            }}><FaHome /></Text>
        </Link>
        </Box>
    </Box>
  )
}

export default About