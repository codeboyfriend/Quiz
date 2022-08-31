import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from '@chakra-ui/react'; 
// import theme from "./theme";
import axios from "axios";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
// import Level from "./components/Level";
import About from "./components/About";
import EndScreen from "./components/pages/EndScreen";
import MultiPlayer from "./components/pages/MultiPlayer";
import MultiEnd from "./components/pages/MultiEnd"; 

import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState('Easy');
  const [score, setScore] = useState(0);
  const [kwizScore, setKwizScore] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [point, setPoint] = useState(0);
  const [name, setName] = useState("");

  const fetchQuestion = async () => {
    const result = await axios(`https://quizapi.io/api/v1/questions?apiKey=6cm1r5jVOf9rfQxLa6vxOceBaOXAvgYSdAag0ncz&difficulty=${categories}`);
    
    setQuestions(result.data);
  }
  
  fetchQuestion()

  return (
    <Router>
      <ChakraProvider>
      <Box>
        <QuizContext.Provider value={{ 
          questions,
          setQuestions,
          score, 
          setScore, 
          currQuestion, 
          setCurrQuestion,
          point,
          setPoint,
          name,
          setName,
          kwizScore,
          setKwizScore 
        }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/end" element={<EndScreen />} />
            <Route path="/multiend" element={<MultiEnd />} />
            <Route path="/about" element={<About />} />
            <Route path="/multiplayer" element={<MultiPlayer />} />
          </Routes>
        </QuizContext.Provider>
    </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
