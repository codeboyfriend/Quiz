import { useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'; 
import axios from "axios";
import { 
  Box,
  Heading, 
  Stack,
  Text
} from "@chakra-ui/react";
import { FaBusinessTime } from 'react-icons/fa';

function App() {
  const [res, setRes] = useState([]);
  const [categories, setCategories] = useState('Easy');

  const fetchQuestion = async () => {
    const result = await axios(`https://quizapi.io/api/v1/questions?apiKey=6cm1r5jVOf9rfQxLa6vxOceBaOXAvgYSdAag0ncz&difficulty=${categories}`);
    
    setRes(result.data);
  }
  
  useEffect(() => {
    fetchQuestion();
  }, [categories])

  return (
    <ChakraProvider>
      <Box className="App" sx={{
        minW: '300px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box>
          <Heading>Quiz</Heading>

          <Stack>
            <Box sx={{
              display: 'flex',
              bgColor: '#fff',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '10px'
            }}>
              <FaBusinessTime />
              <Text>Play Quiz</Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
