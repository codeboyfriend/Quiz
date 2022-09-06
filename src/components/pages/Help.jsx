import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from '../../Helpers/Contexts';

import { FaHome } from "react-icons/fa";

import {
    Box, 
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon 
} from '@chakra-ui/react'

const Help = () => {
  const {
    sfxMode,
    ButtonSound
  } = useContext(QuizContext);

  const play = () => {
    new Audio(ButtonSound).play()
  }

  return (
    <Box sx={{
      height: '100vh',
      bgColor: 'blue.800',
      color: '#fff',
  }}>
    <Box sx={{
      maxW: '700px',
      m: '0 auto'
    }}>
    <Box sx={{
        display: 'flex',
        bgColor: 'blue.800',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #fff',
        boxShadow: '0px 1px 2px rgba'
    }}>
      <Link to='/home'>
        <Text onClick={sfxMode && play} sx={{
          fontSize: '1rem'
        }}>Kwiz Help</Text>
      </Link>

      <Link to='/home'>
        <Text onClick={sfxMode && play} sx={{
          fontSize: '1.4rem'
        }}><FaHome /></Text>
      </Link>
    </Box>

    <Box sx={{
      mt: '25vh'
    }}>
      <Accordion allowToggle sx={{
        width: '90%',
        m: '0 auto'
      }}>
        <AccordionItem>
          <h2>
            <AccordionButton onClick={sfxMode && play}
               _expanded={{
                color: '#ffbb29'
            }}>
              <Box flex={1} textAlign={'left'}>
                Select question categories
              </Box>
              <AccordionIcon />
              </AccordionButton>
                </h2>
                  <AccordionPanel pb={4} pl={'50px'}>
                    <ul>
                      <li>Click on settings</li>
                      <li>Choose from the available categories</li>
                    </ul>
                  </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton onClick={sfxMode && play}
               _expanded={{
                color: '#ffbb29'
            }}>
              <Box flex={1} textAlign={'left'}>
                Select Level
              </Box>
              <AccordionIcon />
              </AccordionButton>
                </h2>
                  <AccordionPanel pb={4} pl={'50px'}>
                    <ul>
                      <li>Click on settings</li>
                      <li>Select</li>
                    </ul>
                </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton onClick={sfxMode && play}
              _expanded={{
                color: '#ffbb29'
            }}>
              <Box flex={1} textAlign={'left'}>
                Toggle SFX Mode
              </Box>
              <AccordionIcon />
              </AccordionButton>
                </h2>
                  <AccordionPanel pb={4} pl={'50px'}>
                    <ul>
                      <li>Click on settings</li>
                      <li>Click on the button</li>
                    </ul>
                </AccordionPanel>
        </AccordionItem>
    </Accordion>
  </Box>
    </Box>
  </Box>
  )
}

export default Help