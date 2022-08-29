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

  const fetchQuestion = async () => {
    const result = await axios(`https://quizapi.io/api/v1/questions?apiKey=${import.meta.REACT_APP_API_KEY}&difficulty=${categories}`);
    
    setRes(result.data);
  }
  
  useEffect(() => {
    fetchQuestion();
  }, [categories])

  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
