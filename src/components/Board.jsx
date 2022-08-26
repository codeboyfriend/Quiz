import { 
    Box,
    Text 
} from "@chakra-ui/react";


const Board = () => {
    const flexStyle = {
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'center'
    }

    const textStyle = {
        fontStyle: '800'
    }
     
  return (
    <Box>
        <Box sx={flexStyle}>
            <Text sx={textStyle}>3/4</Text>
            <Text>questions</Text>
        </Box>

        <Box>17</Box>

        <Box sx={flexStyle}>
            <Text sx={textStyle}>10</Text>
            <Text>points</Text>
        </Box>
    </Box>
  )
}

export default Board