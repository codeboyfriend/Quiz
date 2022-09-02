import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

import { 
    Box 
} from "@chakra-ui/react";

const Level = () => {
    const {
        categories,
        setCategories
    } = useContext(QuizContext);

  return (
    <Box sx={{
        bg: 'blue.800',
        color: '#fff',
        display: 'flex',
        alignItems: 'center'
    }}>
        <Box sx={{
            m: '10px 0',
            mr: '15px'
        }}>Select Level</Box>
        <select value={categories} onChange={(e) => setCategories(e.target.value)} style={{
            color: '#2a4365',
            fontSize: '12px',
            fontWeight: '500',
            padding: '3px',
            outline: 'none'
        }}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
        </select>
    </Box>
  )
}

export default Level