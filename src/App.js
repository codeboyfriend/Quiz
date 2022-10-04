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
import Help from "./components/pages/Help";
import { QuizContext } from "./Helpers/Contexts";
import BGsound from '../src/assets/sound.mp3';
import ButtonSound from '../src/assets/buttonSound.mp3';
import ErrorSound from '../src/assets/errorSound.mp3';

function App() {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState('Easy');
  const [score, setScore] = useState(0);
  const [kwizScore, setKwizScore] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [point, setPoint] = useState(0);
  const [name, setName] = useState("");
  const [tags, setTags] = useState('');
  const [sfxMode, setSfxMode] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuestion = async () => {
    const result = await axios(`https://quizapi.io/api/v1/questions?apiKey=6cm1r5jVOf9rfQxLa6vxOceBaOXAvgYSdAag0ncz&difficulty=${categories}&tags=${tags}`);
    
    setQuestions(result.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchQuestion(); // eslint-disable-next-line
  }, [categories, tags, refresh]);

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
          setCategories,
          tags,
          setTags,
          refresh,
          setRefresh,
          sfxMode,
          setSfxMode,
          BGsound,
          ButtonSound,
          ErrorSound,
          isLoading
        }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/end" element={<EndScreen />} />
            <Route path="/multiend" element={<MultiEnd />} />
            <Route path="/about" element={<About />} />
            <Route path="/multiplayer" element={<MultiPlayer />} />
            <Route path="/settings" element={<Categories />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </QuizContext.Provider>
      </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
