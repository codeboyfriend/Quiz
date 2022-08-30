import { 
    Box,
    Text
  } from "@chakra-ui/react";


const Answer = ({ ans }) => {
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

    const optionStyle = {
        bgColor: 'blue.800',
        color: '#fff',
        padding: '5px 12px',
        borderRadius: '100%',
        fontWeight: 'bold',
        marginRight: '15px'
    }
    
  return (
    <Box sx={{
        maxW: '700px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>

        <Box sx={flexStyle}>
          <Text sx={optionStyle}>A</Text>
          <Text>{ans.text}</Text>
        </Box>
      </Box>
  )
}

export default Answer