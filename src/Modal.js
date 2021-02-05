import React, {useState} from 'react'

const Modal = () => {
    const [modal, setModal] = useState(false)

    const handleClick = () => {
    }

    return (
        <div>
            <button onClick={handleClick}>Show Form</button>
        </div>
    )
}

export default Modal
