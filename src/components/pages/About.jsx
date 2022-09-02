import { 
    Box,
    Heading,
    Text
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
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
          maxW: '700px',
          textAlign: 'center',
          border: '1px solid #fff',
          m: '0 15px',
          borderRadius: "10px",
          overflow: 'hidden'
        }}
        >
          <Heading sx={{
            bgColor: '#fff',
            color: 'blue.800',
            p: '10px'
          }}>Kwiz</Heading>
          <Text sx={{
            fontSize: '.9rem',
            p: '20px 10px',
            textAlign: 'left'
          }}>
            Text in production.......... not yet deploy........Text in production.......... not yet deploy........Text in production.......... not yet deploy........Text in production.......... not yet deploy........Text in production.......... not yet deploy........Text in production.......... not yet deploy........Text in production.......... not yet deploy........
          </Text>
        </Box>

        <Box sx={{
            mt: '20px'
        }}>
        <Link to='/home'>
            <Text sx={{
                fontSize: '1.5rem'
            }}><FaHome /></Text>
        </Link>
        </Box>
    </Box>
  )
}

export default About