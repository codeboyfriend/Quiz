import { 
    Box,
    Text 
} from "@chakra-ui/react"
const Level = ({
    categories,
    setCategories
}) => {
  return (
    <Box sx={{
        bg: 'blue.800',
        color: '#fff',
        h: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: 'column'
    }}>
        <Box sx={{
            mb: '15px'
        }}>Select Level</Box>
        <select value={categories} onChange={(e) => setCategories(e.target.value)} style={{
            color: '#2a4365',
            fontSize: '12px',
            fontWeight: '500'
        }}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
        </select>
    </Box>
  )
}

export default Level