import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from '@chakra-ui/react'; 
// import theme from "./theme";
// import axios from "axios";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
// import Level from "./components/Level";
import About from "./components/About";
import EndScreen from "./components/pages/EndScreen";

import { QuizContext } from "./Helpers/Contexts";

function App() {
  // const [res, setRes] = useState([]);
  // const [categories, setCategories] = useState('Easy');
  const [score, setScore] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [point, setPoint] = useState(0);

  // const fetchQuestion = async () => {
  //   const result = await axios(`https://quizapi.io/api/v1/questions?apiKey=${import.meta.REACT_APP_API_KEY}&difficulty=${categories}`);
    
  //   setRes(result.data);
  // }
  
  // useEffect(() => {
  //   fetchQuestion();
  // }, [categories])

  return (
    <Router>
      <ChakraProvider>
      <Box>
        <QuizContext.Provider value={{ 
          score, 
          setScore, 
          currQuestion, 
          setCurrQuestion,
          point,
          setPoint 
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/end" element={<EndScreen />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </QuizContext.Provider>
    </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
