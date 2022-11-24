import React from 'react';
import Modal from 'react-modal';
import OrdersTable from './orderstable';
import AddPainting from './addpainting';
import Login from './login';
import ExitButton from './exitButton';


function Admin(props) {
    const [orders, setOrders] = React.useState(props.orders);
    const dataendpoint = "https://devweb2022.cis.strath.ac.uk/ykb20128-nodejs/orders"

    function render(){
        fetch(dataendpoint)
        .then((response) => response.json())
        .then((data) => hateThis(data));
    }

    React.useEffect(() => {
        render()
    }, []);

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(true);
    
    function hateThis(data){
        setOrders(data)
    }

    function rerender(id){
        setOrders (orders.filter(function(e) { return e.id !== id }))
    }
    
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
    
    function closeModal() {
        setIsOpen(false);
    }
    const [modalIsOpen2, setIsOpen2] = React.useState(false);

    function openModal2() {
        setIsOpen2(true);
    }

    function afterOpenModal2() {
        subtitle.style.color = '#f00';
    }
    
    function closeModal2() {
        setIsOpen2(false);
    }

  return (
    <div>
        {/* fatal flaw: clicking outside of the modal for login bypasses it, does make testing easier, can be easily changed with a style change */}
    <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={"w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 items-center"}
    contentLabel="Login Modal"
    >
    <Login closeModal={closeModal}/>
    </Modal>
    <Modal
    isOpen={modalIsOpen2}
    onAfterOpen={afterOpenModal2}
    onRequestClose={closeModal2}
    style={"w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 items-center"}
    contentLabel="Add Painting Modal"
    >
    <ExitButton closeModal={closeModal2}/>
    <AddPainting reloadpaintings={props.reloadpaintings} closeModal={closeModal2}/>
    </Modal>

    <button onClick={openModal2} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-blue-800 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white ">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Add Painting
            </span>
          </button>
    
    <OrdersTable orders={orders} rerender={rerender} />
    </div>
    )
}

export default Admin

