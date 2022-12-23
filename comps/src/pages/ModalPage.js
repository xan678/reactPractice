import {useState} from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"

const ModalPage = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);    
    }

    const handleBackgroudClick = () => {
        setShowModal(false);
    }

    const actionBar = (<div>
        <Button onClick = {handleBackgroudClick} primary>I Accept</Button>
    </div>);

    const modal = (<Modal onClose = {handleBackgroudClick} actionBar = {actionBar}>
        <p>
            Here is an import agreement for you to accept!!
        </p>
    </Modal>);

    return <div>
            <Button onClick = {handleClick} primary>Open Modal</Button>
            {showModal && modal }
        </div>
}

export default ModalPage;