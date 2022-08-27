import { 
    Box,
    Heading,
    Text
  } from "@chakra-ui/react";
import { FaBusinessTime } from 'react-icons/fa';

 const Home = () => {
    const flexStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
        borderRadius: '20px',
        cursor: 'pointer',
        width: '250px',
        bgColor: '#fff',
        color: 'blue.800',
        margin: '5px'
    }

    const iconStyle ={
        bgColor: 'blue.800',
        padding: '8px',
        borderRadius: '100%',
        marginRight: '15px',
        fontSize: '1.2rem',
        color: '#fff'
    }

return (
<Box sx={{
    bgColor: 'blue.800',
    color: '#fff',
}}>
    <Box sx={{
        maxW: '700px',
        m: '0 auto',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px 0',
        alignItems: 'center',
        flexDir: 'column'
    }}>
        {/* Header component */}
        <Heading>Quiz</Heading>

        {/* Buttons component */}
        <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
        }}>

        <Box sx={flexStyle}>
            <Text sx={iconStyle}><FaBusinessTime /></Text>
            <Text color={'blue.800'}>Play Quiz</Text>
        </Box>

        <Box sx={flexStyle}>
            <Text sx={iconStyle}><FaBusinessTime /></Text>
            <Text>Play Quiz</Text>
        </Box>

        <Box sx={flexStyle}>
            <Text sx={iconStyle}><FaBusinessTime /></Text>
            <Text>More categories</Text>
        </Box>

        <Box sx={flexStyle}>
            <Text sx={iconStyle}><FaBusinessTime /></Text>
            <Text>Play Quiz</Text>
        </Box>
        </Box>

        {/* Footer component */}
        <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
        }}>
        <Box>Settings</Box>
        <Box>About</Box>
        </Box>
    </Box>
    </Box>
)
}
 
export default Home