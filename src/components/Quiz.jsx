import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { QuizContext } from "../Helpers/Contexts"
import { Questions } from "../Helpers/QuestionBank";

import { 
    Box,
    Text
  } from "@chakra-ui/react";

import { 
  ArrowRightIcon, 
  CheckIcon
} from "@chakra-ui/icons"; 

const Quiz = () => {
  const navigate = useNavigate();
  const {score, setScore, currQuestion, setCurrQuestion, setPoint, point } = useContext(QuizContext);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
   if(Questions[currQuestion].answer === optionChosen){
      setScore(score + 1);
      setPoint(point + 2);
    }

    setCurrQuestion(currQuestion + 1);
  }

  const finishQuiz = () => {
    if(Questions[currQuestion].answer === optionChosen){
      setScore(score + 1);
    }

    setCurrQuestion(0);
    navigate('/end');
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

  const optionStyle = {
    bgColor: 'blue.800',
    color: '#fff',
    padding: '5px 12px',
    borderRadius: '100%',
    fontWeight: 'bold',
    marginRight: '15px'
  }

  const finishStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    borderRadius: '20px',
    cursor: 'pointer',
    width: '250px',
    bgcolor: 'blue.800',
    border: "1px solid #fff",
    margin: '5px',
    mt: '20px'
}

  const finishStyleOp = {
    fontWeight: 'bold',
    marginLeft: '5px',
    padding: '5px',
    fontSize: '.8rem'
  }

  return (
    <Box>
      <Box sx={{
          w: '100%',
          bgColor: '#fff',
          color: 'blue.800',
          p: '10px',
          mb: '15px',
          textAlign: 'center'
        }}>
          <h1>{Questions[currQuestion].prompt}</h1>
      </Box>

      <Box sx={{
        maxW: '700px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Box onClick={() => setOptionChosen('A')} sx={flexStyle}>
          <Text sx={optionStyle}>A</Text>
          <Text>{Questions[currQuestion].optionA}</Text>
        </Box>

        <Box onClick={() => setOptionChosen('B')} sx={flexStyle}>
          <Text sx={optionStyle}>B</Text>
          <Text>{Questions[currQuestion].optionB}</Text>
        </Box>

        <Box onClick={() => setOptionChosen('C')} sx={flexStyle}>
          <Text sx={optionStyle}>C</Text>
          <Text>{Questions[currQuestion].optionC}</Text>
        </Box>

        <Box onClick={() => setOptionChosen('D')} sx={flexStyle}>
          <Text sx={optionStyle}>D</Text>
          <Text>{Questions[currQuestion].optionD}</Text>
        </Box>

        {currQuestion === Questions.length - 1 ? (
        <Box onClick={finishQuiz} sx={finishStyle}>
          <Text>Finish</Text>
          <Text sx={finishStyleOp}><CheckIcon /></Text>
        </Box>
      ) : (
        <Box onClick={nextQuestion} sx={finishStyle}>
          <Text>Next</Text>
          <Text sx={finishStyleOp}><ArrowRightIcon /></Text>
        </Box>
      )}
      </Box>
    </Box>
  )
}

export default Quiz