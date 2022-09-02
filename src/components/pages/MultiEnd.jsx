import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { QuizContext } from "../../Helpers/Contexts";
import { 
  Box,
  Text,
  Heading 
} from "@chakra-ui/react";
import { ArrowRightIcon} from "@chakra-ui/icons";

const MultiEnd = () => {
  const navigate = useNavigate();
  const {
    setScore, 
    point, 
    setPoint, 
    kwizScore, 
    setKwizScore 
} = useContext(QuizContext);

  const restartGame = () => { 
    setScore(0);
    setPoint(0);
    setKwizScore(0);
    navigate('/home')
  }

  const flexStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7px',
    borderRadius: '20px',
    cursor: 'pointer',
    width: '250px',
    bgColor: '#fff',
    color: 'blue.800',
    margin: '5px'
  }

  let result;

  // eslint-disable-next-line
  {
    if (kwizScore > point) {
      result = 'You lose'
    } else if (kwizScore < point){
      result = 'You won'
    }else {
      result = 'Draw'
    }
  }

  const finishStyleOp = {
    fontWeight: 'bold',
    marginLeft: '5px',
    padding: '5px',
    fontSize: '.8rem'
  }
  
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
          <Heading>{result}</Heading>
          
          <Text sx={{
            mt: '15px'
          }}>Kwiz : { kwizScore }</Text>

         <Text sx={{
            m: '15px 0'
          }}>You : { point }</Text>

          <Box onClick={restartGame} sx={flexStyle}>
            <Text>Restart Quiz</Text>
            <Text sx={finishStyleOp}><ArrowRightIcon /></Text>
        </Box>
      </Box>
    </Box>
  )
}

export default MultiEnd