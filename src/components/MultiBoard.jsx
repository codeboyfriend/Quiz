import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { 
    Box,
    Text 
} from "@chakra-ui/react";

const MultiBoard = () => {
    const { 
        kwizScore, 
        currQuestion, 
        point, 
        questions 
    } = useContext(QuizContext);

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
            <Text sx={textStyle}>Kwiz</Text>
            <Text>{kwizScore}</Text>
        </Box>

        <Box sx={{
            border: '1px solid #fff',
            padding: '10px 17px',
            borderRadius: '100%',
            borderTopRightRadius: '1px solid #000'
        }}>{ currQuestion + 1 } / { questions.length }</Box>

        <Box sx={flexStyle}>
            <Text sx={textStyle}>You</Text>
            <Text>{point}</Text>
        </Box>
    </Box>
  )
}

export default MultiBoard