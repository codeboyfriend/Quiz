import { 
    Box,
    Heading 
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Level from "../Level";

const Categories = () => {
  return (
    <Box sx={{
        maxW: '700px',
        m: '0 auto',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '40px 0',
        flexDir: 'column',
        bgColor: 'blue.800',
        color: '#fff'
    }}>
        <Heading sx={{
            mb: '40px',
            fontWeight: '500'
        }}>Settings</Heading>

        <Box sx={{
            mb: '40px'
        }}>
            <Level />
        </Box>

        <Box sx={{
            fontSize: '1.5rem'
        }}>
            <Link to={'/home'}><FaHome /></Link>
        </Box>
    </Box>
  )
}

export default Categories