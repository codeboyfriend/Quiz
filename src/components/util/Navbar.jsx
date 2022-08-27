import { 
    Box, 
    Text 
} from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid red'
    }}>
        <Text>Home</Text>
        <Text>People</Text>
        <Text sx={{
            fontSize: '12px'
        }}>skip</Text>
    </Box>
  )
}

export default Navbar