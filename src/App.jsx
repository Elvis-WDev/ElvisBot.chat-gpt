
import { Button } from '@react95/core';
import { useState } from 'react';
import { Win95Gpt } from './components/modals/Win95Gpt';
import { Taskbar } from './components/Taskbar';

function App() {

  const [showModal, toggleShowModal] = useState(true);
  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);

  return (
    <>
      <Win95Gpt handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} showModal={showModal} />
      <Taskbar handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} showModal={showModal} />
    </>
  )
}

export default App
