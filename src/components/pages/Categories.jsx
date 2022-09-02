import { 
    Box,
    Heading 
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Level from "../Level";
import Tags from "../Tags";

const Categories = () => {
  return (
    <Box sx={{
        h: '100vh',
        bg: 'blue.800',
        color: '#fff',
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        p: '40px 0' 
    }}>
        <Box sx={{
        minW: '300px',    
        maxW: '700px',
        textAlign: 'center',
        border: '1px solid #fff',
        m: '0 15px',
        borderRadius: "10px",
        overflow: 'hidden'
    }}>
        <Heading  sx={{
            bgColor: '#fff',
            color: 'blue.800',
            p: '10px'
          }}>Settings</Heading>

        <Box sx={{
            mb: '40px',
            p: '20px 10px'
        }}>
            <Tags />
            <Level />
        </Box>

        
        </Box>
        <Box sx={{
            fontSize: '1.5rem',
            alignSelf: 'center',
            mt: '20px'
        }}>
            <Link to={'/home'}><FaHome /></Link>
        </Box>
    </Box>
  )
}

export default Categories