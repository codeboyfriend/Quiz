import { 
    Box, 
    Text 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box sx={{
        display: 'flex',
        bgColor: 'blue.800',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #fff',
        boxShadow: '0px 1px 2px rgba'
    }}>
        <Link to='/'>
        <Text sx={{
          fontSize: '1.4rem'
        }}><FaHome /></Text>
        </Link>

        <Link to='/'>
        <Text sx={{
          fontSize: '1.5rem',
          fontWeight: '500'
        }}>Kwiz</Text>
        </Link>

        <Text sx={{
            fontSize: '12px',
            cursor: 'pointer'
        }}>skip</Text>
    </Box>
  )
}

export default Navbar