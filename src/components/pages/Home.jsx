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
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '250px',
        bgColor: 'red',
        color: '#fff',
        margin: '5px'
    }

   return (
    <Box className="App">
        <Box sx={{
        minW: '300px',
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
            maxW: '700px',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>

            <Box sx={flexStyle}>
              <FaBusinessTime />
              <Text>Play Quiz</Text>
            </Box>

            <Box sx={flexStyle}>
              <FaBusinessTime />
              <Text>Play Quiz</Text>
            </Box>

            <Box sx={flexStyle}>
              <FaBusinessTime />
              <Text>More categories</Text>
            </Box>

            <Box sx={flexStyle}>
              <FaBusinessTime />
              <Text>Play Quiz</Text>
            </Box>
          </Box>

          {/* Footer component */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Box>Settings</Box>
            <Box>About</Box>
          </Box>
        </Box>
      </Box>
   )
 }
 
 export default Home