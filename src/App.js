import { useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'; 
import axios from "axios";
import Home from "./components/pages/Home";

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
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
