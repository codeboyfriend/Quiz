import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from '@chakra-ui/react'; 
import axios from "axios";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import EndScreen from "./components/pages/EndScreen";
import MultiPlayer from "./components/pages/MultiPlayer";
import MultiEnd from "./components/pages/MultiEnd";
import Categories from "./components/pages/Categories"; 
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState('Easy');
  const [score, setScore] = useState(0);
  const [kwizScore, setKwizScore] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [point, setPoint] = useState(0);
  const [name, setName] = useState("");
  // const [tags, setTags] = useState('Easy');

  const fetchQuestion = async () => {
    const result = await axios(`https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&difficulty=${categories}`);
    
    setQuestions(result.data);
  }
  
  useEffect(() => {
    fetchQuestion(); // eslint-disable-next-line
  }, [categories])

  // console.log(process.env.REACT_APP_API_KEY)

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
          setKwizScore,
          categories,
          setCategories 
        }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/end" element={<EndScreen />} />
            <Route path="/multiend" element={<MultiEnd />} />
            <Route path="/about" element={<About />} />
            <Route path="/multiplayer" element={<MultiPlayer />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </QuizContext.Provider>
    </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
