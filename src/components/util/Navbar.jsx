import { 
    Box, 
    Text 
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { QuizContext } from "../../Helpers/Contexts";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const { 
    name, 
    currQuestion, 
    questions, 
    ButtonSound,
    sfxMode 
  } = useContext(QuizContext);
  const navigate = useNavigate();
  const location = useLocation();

  const play = () => {
    new Audio(ButtonSound).play()
  }

  const skipPlayQuestion = () => {
    sfxMode && play(); 
    navigate('/end');
  }

  const skipMultiQuestion = () => { 
    sfxMode && play();
    navigate('/multiend');
  }

  return (
    <Box sx={{
        display: 'flex',
        bgColor: 'blue.800',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #fff',
        boxShadow: '0px 1px 2px rgba'
    }}>
        <Link to='/home'>
          <Text onClick={sfxMode && play} sx={{
            fontSize: '1.4rem'
          }}><FaHome /></Text>
        </Link>

        <Link to='/home'>
          <Text sx={{
            fontSize: '1.5rem',
            fontWeight: '500'
          }}>{name}</Text>
        </Link>
      {
        location.pathname === '/multiplayer' &&
        <Box>
          {currQuestion !== questions.length - 1 && (
            <Text onClick={skipMultiQuestion} sx={{
              fontSize: '15px',
              cursor: 'pointer'
            }}>quit</Text>
          )}
        </Box>
      }

      {
        location.pathname !== '/multiplayer' &&
        <Box>
          {currQuestion !== questions.length - 1 && (
            <Text onClick={skipPlayQuestion} sx={{
              fontSize: '15px',
              cursor: 'pointer'
            }}>quit</Text>
          )}
        </Box>
      }
    </Box>
  )
}

export default Navbar