import React, { useState } from 'react'
import { ChakraProvider, Button } from '@chakra-ui/react'
import { createPortal } from 'react-dom'
import ModalComponent from './ModalComponent';

const ModalPortal = ({ children }) => {
  const target = document.querySelector('.container.start')
  return createPortal(children, target);
}
const ModalContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ChakraProvider>
      <div className='tutorial'>

        <div className='container start'></div>

        <Button colorScheme='teal' size='md' onClick={() => setModalOpen(prev => !prev)}>{modalOpen ? "close" : "open"}</Button>
        {
          modalOpen && (
            <ModalPortal>
              <ModalComponent />
            </ModalPortal>
          )
        }
      </div>
    </ChakraProvider>
  )
}

export default ModalContainer