import { 
    Box,
    Text 
} from "@chakra-ui/react";


const Board = () => {
    const flexStyle = {
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px'
    }

    const textStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold'
    }
     
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        m: '15px 0'
    }}>
        <Box sx={flexStyle}>
            <Text sx={textStyle}>3/4</Text>
            <Text>questions</Text>
        </Box>

        <Box sx={{
            border: '1px solid #fff',
            padding: '10px 12px',
            borderRadius: '100%'
        }}>17</Box>

        <Box sx={flexStyle}>
            <Text sx={textStyle}>10</Text>
            <Text>points</Text>
        </Box>
    </Box>
  )
}

export default Board