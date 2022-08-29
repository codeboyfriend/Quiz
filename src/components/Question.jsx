import { 
    Box,
    Text
  } from "@chakra-ui/react";

const Question = () => {
  return (
    <Box sx={{
        w: '100%',
        bgColor: '#fff',
        color: 'blue.800',
        p: '10px',
        mb: '15px',
        textAlign: 'center',
        fontSize: '14px'
    }}>
        <Text sx={{
            bgColor: '#fff',
            color: 'blue.800'
        }}>What is HTML?</Text>
    </Box>
  )
}

export default Question