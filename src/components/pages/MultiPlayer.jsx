import { Box } from "@chakra-ui/react";
import Navbar from "../util/Navbar";
import MultiBoard from "../MultiBoard";
import MultiQuiz from "../MultiQuiz";

const MultiPlayer = () => {
  return (
    <Box sx={{
        height: '100vh',
        bgColor: 'blue.800',
        color: '#fff'
      }}>
        <Box sx={{
            maxW: '600px',
            m: '0 auto'
          }}>
            <Navbar />
            <MultiBoard />
            <MultiQuiz />
        </Box>
      </Box>
  )
}

export default MultiPlayer