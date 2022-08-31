import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { QuizContext } from "../../Helpers/Contexts";
import { Questions } from "../../Helpers/QuestionBank";
import { 
  Box,
  Text,
  Heading 
} from "@chakra-ui/react";

const EndScreen = () => {
  const navigate = useNavigate();
  const { score, setScore, point, setPoint } = useContext(QuizContext);

  const restartGame = () => { 
    setScore(0);
    setPoint(0);
    navigate('/')
  }

  const flexStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    borderRadius: '20px',
    cursor: 'pointer',
    width: '250px',
    bgColor: '#fff',
    color: 'blue.800',
    margin: '5px'
  }

  // const optionStyle = {
  //   bgColor: 'blue.800',
  //   color: '#fff',
  //   padding: '5px 12px',
  //   borderRadius: '100%',
  //   fontWeight: 'bold',
  //   marginRight: '15px'
  // }
  
  return (
    <Box sx={{
      height: '100vh',
      bgColor: 'blue.800',
      color: '#fff'
    }}>
      <Box sx={{
          maxW: '700px',
          m: '0 auto',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDir: 'column'
        }}>
          <Heading>Quiz Finished</Heading>
          
          <Text sx={{
            mt: '15px'
          }}>{ score } / { Questions.length }</Text>

         <Text sx={{
            m: '15px 0'
          }}>Point : { point }</Text>

          <Box onClick={restartGame} sx={flexStyle}>
            <Text>Restart Quiz</Text>
            {/* <Text sx={finishStyleOp}><ArrowRightIcon /></Text> */}
        </Box>
      </Box>
    </Box>
  )
}

export default EndScreen