import { 
  Box,
  Text,
  Heading,
  Input,
  useToast 
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../Helpers/Contexts";

const Login = () => {
  const { 
    name, 
    setName, 
    StartSound
  } = useContext(QuizContext);
  const toast = useToast();

  const flexStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    bgColor: '#e5e5e5',
    color: 'blue.800',
    margin: '10px auto',
    p: '7px'
  }

  const navigate = useNavigate();

  const enterplay = () => {
    new Audio(StartSound).play()
  }

  const login = () => {
    enterplay();
    name !== '' && navigate('/home');
  }

  const emptyToast = () => {
    name === '' && toast({
      title: '',
      description: 'Enter Name',
      status: 'error',
      duration: '2000',
      position: 'bottom-left'
    }); 
 }

  return (
    <Box sx={{
        height: '100vh',
        bgColor: 'blue.800',
        color: '#fff',
        display: 'flex',
        p: '100px 0'
      }}>
        <Box sx={{
            w: '250px',
            m: '0 auto'
          }}>
            <Heading sx={{
                textAlign: 'center',
                mb: '50px'
            }}>Kwiz</Heading>

            <Text sx={{
                textAlign: 'center',
                opacity: '0.8'
            }}>Enter your Name:</Text>

            <Input sx={{
                padding: '5px'
            }} 
              value={name}
              variant={'filled'}
              placeholder={'codeboyfriend'}
              onChange={(e) => setName(e.target.value)}
              type={'text'} 
            />

            <Box onClick={() => {
              emptyToast()
              login()
            }} sx={flexStyle}>
              <Text>Welcome</Text>
            </Box>
        </Box>
      </Box>
  )
}

export default Login