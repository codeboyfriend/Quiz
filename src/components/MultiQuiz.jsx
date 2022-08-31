import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { QuizContext } from "../Helpers/Contexts";

import { 
    Box,
    Text
  } from "@chakra-ui/react";

import { 
  ArrowRightIcon
} from "@chakra-ui/icons"; 
import { FaRegCheckCircle } from "react-icons/fa";

const MultiQuiz = () => {
  const navigate = useNavigate();
  const {
    currQuestion, 
    setCurrQuestion, 
    setPoint, 
    point,
    kwizScore,
    setKwizScore,
    questions 
} = useContext(QuizContext);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
   if(optionChosen === 'true'){
      setPoint(point + 2);
      setKwizScore(kwizScore + Math.floor(Math.random() * 5))
    }

    setCurrQuestion(currQuestion + 1);
  }

  const finishQuiz = () => {
    if(optionChosen === 'true'){
        setPoint(point + 2);
    }

    setCurrQuestion(0);
    navigate('/multiend');
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
          <h1>{questions[currQuestion].question}</h1>
      </Box>

      <Box sx={{
        maxW: '700px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Box onClick={setOptionChosen(questions[currQuestion].correct_answers.answer_a_correct)} sx={flexStyle}>
          <Text sx={optionStyle}>A</Text>
          <Text>{questions[currQuestion].answers.answer_a}</Text>
        </Box>

        <Box onClick={() => setOptionChosen(questions[currQuestion].correct_answers.answer_b_correct)} sx={flexStyle}>
          <Text sx={optionStyle}>B</Text>
          <Text>{questions[currQuestion].answers.answer_b}</Text>
        </Box>

        <Box onClick={() => setOptionChosen(questions[currQuestion].correct_answers.answer_c_correct)} sx={flexStyle}>
          <Text sx={optionStyle}>C</Text>
          <Text>{questions[currQuestion].answers.answer_c}</Text>
        </Box>

        <Box onClick={() => setOptionChosen(questions[currQuestion].correct_answers.answer_d_correct)} sx={flexStyle}>
          <Text sx={optionStyle}>D</Text>
          <Text>{questions[currQuestion].answers.answer_d}</Text>
        </Box>

        {currQuestion === questions.length - 1 ? (
        <Box onClick={finishQuiz} sx={finishStyle}>
          <Text>Finish</Text>
          <Text sx={finishStyleOp}><FaRegCheckCircle /></Text>
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

export default MultiQuiz