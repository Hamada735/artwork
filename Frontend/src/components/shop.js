import React from 'react'
import Modal from 'react-modal';
import Paintings from './paintings';
import ExitButton from './exitButton';
import OrderForm from './modalBody';

function Shop(props) {
  const paintings = props.paintings
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [painting, setpainting] = React.useState([]);
  
  
  function openModal() {
    setIsOpen(true);
  }
  
  function moreDetails(props) {
    setpainting(props); 
    openModal()
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
    <Paintings paintings={paintings} orderFunc={moreDetails}/>
    <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={"w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 items-center"}
    contentLabel="Example Modal"
    >
    <div class="grid grid-rows-1">
    <ExitButton closeModal={closeModal}/>
    <OrderForm painting={painting}/>
    </div>
    </Modal>
    </div>
  )
}

export default Shop