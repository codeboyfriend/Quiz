import { Box } from "@chakra-ui/react";

const Answers = () => {
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
    <Box>
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
    </Box>
  )
}

export default Answers