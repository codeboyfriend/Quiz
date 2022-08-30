import { 
    Box,
    Text
  } from "@chakra-ui/react";

const Question = ({
  displayQuestion
}) => {
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
        }}>{ displayQuestion }</Text>
    </Box>
  )
}

export default Question