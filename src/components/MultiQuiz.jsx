import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { QuizContext } from "../Helpers/Contexts";

import { 
  Box,
  Text
} from "@chakra-ui/react";

import { 
  ArrowRightIcon,
  ArrowLeftIcon
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
    questions,
    ButtonSound,
    sfxMode
  } = useContext(QuizContext);
  const [optionChosen, setOptionChosen] = useState("");
  const [optionChosenBG, setOptionChosenBG] = useState("");

  const play = () => {
    new Audio(ButtonSound).play()
  }

  const nextQuestion = () => {
    if(optionChosen === 'true'){
      setPoint(point + 2);
      setOptionChosen('');
    }

    sfxMode && play();
    setOptionChosenBG('');
      setKwizScore(kwizScore + Math.floor(Math.random() * 3));
      setCurrQuestion(currQuestion + 1);
    }

    const prevQuestion = () => {
      sfxMode && play();
      setOptionChosen('');
      setOptionChosenBG('');
      setKwizScore(kwizScore - Math.floor(Math.random() * 2));
      setCurrQuestion(currQuestion - 1);
    }

    const finishQuiz = () => {
      if(optionChosen === 'true'){
        setPoint(point + 2);
      }
    
      sfxMode && play();
      setOptionChosenBG('');
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
    mt: '5px'
  }

  const finishStyleOp = {
    fontWeight: 'bold',
    marginLeft: '5px',
    padding: '5px',
    fontSize: '.8rem'
  }

  const prevStyle = {
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
    m: '5px 0',
    mt: '10px'
  }

  const prevStyleOp = {
    fontWeight: 'bold',
    marginRight: '5px',
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
        <Box onClick={() => {
          sfxMode && play();
          setOptionChosenBG('A');
          setOptionChosen(questions[currQuestion].correct_answers.answer_a_correct);
        }} sx={flexStyle} bgColor={optionChosenBG === 'A' ? 'red.500' : '#fff'}>
          <Text sx={optionStyle}>A</Text>
          <Text>{questions[currQuestion].answers.answer_a}</Text>
        </Box>

        <Box onClick={() => {
          sfxMode && play();
          setOptionChosenBG('B');
          setOptionChosen(questions[currQuestion].correct_answers.answer_b_correct);
        }} sx={flexStyle} bgColor={optionChosenBG === 'B' ? 'red.500' : '#fff'}>
          <Text sx={optionStyle}>B</Text>
          <Text>{questions[currQuestion].answers.answer_b}</Text>
        </Box>

        <Box onClick={() => {
          sfxMode && play();
          setOptionChosenBG('C');
          setOptionChosen(questions[currQuestion].correct_answers.answer_c_correct);
        }} sx={flexStyle} bgColor={optionChosenBG === 'C' ? 'red.500' : '#fff'}>
          <Text sx={optionStyle}>C</Text>
          <Text>{questions[currQuestion].answers.answer_c}</Text>
        </Box>

        <Box onClick={() => {
          sfxMode && play();
          setOptionChosenBG('D');
          setOptionChosen(questions[currQuestion].correct_answers.answer_d_correct);
        }} sx={flexStyle} bgColor={optionChosenBG === 'D' ? 'red.500' : '#fff'}>
          <Text sx={optionStyle}>D</Text>
          <Text>{questions[currQuestion].answers.answer_d}</Text>
        </Box>

        {currQuestion !== 0 && (
          <Box onClick={prevQuestion} sx={prevStyle}>
            <Text sx={prevStyleOp}><ArrowLeftIcon /></Text>
            <Text>Prev</Text>
          </Box>
        )}

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