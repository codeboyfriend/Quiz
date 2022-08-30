import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'; 
// import theme from "./theme";
import axios from "axios";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Level from "./components/Level";
import About from "./components/About";

function App() {
  const [res, setRes] = useState([]);
  const [categories, setCategories] = useState('Easy');
  const [displayQuestion, setDisplayQuestion] = useState('');
  const [displayAnswer, setDisplayAnswer] = useState([]);

  const fetchQuestion = async () => {
    const result = await axios(`https://quizapi.io/api/v1/questions?apiKey=${import.meta.REACT_APP_API_KEY}&difficulty=${categories}`);
    
    setRes(result.data);
  }
  
  useEffect(() => {
    fetchQuestion();
  }, [categories])

  const questions = [
    {
      question: 'What is 2 + 2 ?',
      answers: [
        {text : '4', correct: true},
        {text : '5', correct: false},
        {text : '6', correct: false},
        {text : '7', correct: false}
      ]
    }
  ]

  let shuffledQuestions, currentQuestionIndex; 

  const startGame = () => {
    console.log('startGame')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
  }

  const setNextQuestion = () => {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }

  const resetState = () => {
    
  }

  const showQuestion = (question) => {
    setDisplayQuestion(question.question);
    setDisplayAnswer(question.answers)
  }

  const selectAnswer = () => {
    
  }

  

  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home 
            startGame={startGame}
          />} />
          <Route path="/dashboard" element={<Dashboard
            displayQuestion={displayQuestion}
            displayAnswer={displayAnswer}
          />} />
          <Route path="/level" element={<Level 
           categories={categories}
           setCategories={setCategories}
          />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
