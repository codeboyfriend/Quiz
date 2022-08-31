import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

import { 
    Box,
    Text 
} from "@chakra-ui/react";


const Board = () => {
    const { score, currQuestion, point } = useContext(QuizContext);

    const flexStyle = {
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px'
    }

    const textStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold'
    }
     
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        m: '15px 0'
    }}>
        <Box sx={flexStyle}>
            <Text sx={textStyle}>{ currQuestion + 1 } / { Questions.length }</Text>
            <Text>questions</Text>
        </Box>

        <Box sx={{
            border: '1px solid #fff',
            padding: '10px 17px',
            borderRadius: '100%',
            borderTopRightRadius: '1px solid #000'
        }}>{ score }</Box>

        <Box sx={flexStyle}>
            <Text sx={textStyle}>{point}</Text>
            <Text>points</Text>
        </Box>
    </Box>
  )
}

export default Board