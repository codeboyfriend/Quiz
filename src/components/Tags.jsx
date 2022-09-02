import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

import { 
    Box 
} from "@chakra-ui/react";

const Tags = () => {
    const {
        tags,
        setTags
    } = useContext(QuizContext);

  return (
    <Box sx={{
        bg: 'blue.800',
        color: '#fff',
        display: 'flex',
        alignItems: 'center'
    }}>
        <Box sx={{
            mb: '10px',
            mr: '15px'
        }}>Select Categories</Box>
        <select value={tags} onChange={(e) => setTags(e.target.value)} style={{
            color: '#2a4365',
            fontSize: '12px',
            fontWeight: '500',
            padding: '3px',
            outline: 'none'
        }}>
            <option value="">All</option>
            <option value="html">HTML</option>
            <option value="javascript">JavaScript</option>
            <option value="PHP">PHP</option>
            <option value='WordPress'>WordPress</option>
            <option value='Linux'>Linux</option>
            <option value='MySQL'>SQL</option>
            <option value='docker'>Docker</option>
            <option value='BASH'>BASH</option>
            <option value='Kubernetes'>Kubernetes</option>
            <option value='DevOps'>DevOps</option>
        </select>
    </Box>
  )
}

export default Tags