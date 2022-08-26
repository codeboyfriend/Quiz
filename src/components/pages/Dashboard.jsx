import { Box } from "@chakra-ui/react";
import Navbar from "../util/Navbar";
import Board from "../Board";
import Answers from "../Answers";

const Dashboard = () => {
  return (
    <Box>
        <Navbar />
        <Board />
        <Answers />
    </Box>
  )
}

export default Dashboard