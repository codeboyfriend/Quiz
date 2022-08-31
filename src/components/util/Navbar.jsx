import { 
    Box, 
    Text 
} from "@chakra-ui/react";
import { useContext } from "react";
import { Questions } from "../../Helpers/QuestionBank";
import { QuizContext } from "../../Helpers/Contexts";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const { name, currQuestion, setCurrQuestion } = useContext(QuizContext);

  const skipQuestion = () => { 
    setCurrQuestion(currQuestion + 1)
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
        <Text sx={{
          fontSize: '1.4rem'
        }}><FaHome /></Text>
        </Link>

        <Link to='/home'>
        <Text sx={{
          fontSize: '1.5rem',
          fontWeight: '500'
        }}>{name}</Text>
        </Link>

      {currQuestion !== Questions.length - 1 && (
       <Text onClick={skipQuestion} sx={{
        fontSize: '12px',
        cursor: 'pointer'
      }}>skip</Text>
      )}
    </Box>
  )
}

export default Navbar