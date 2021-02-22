import React from 'react';

import Modal from './Modal';
import Button from '../FormElements/Button';

const ErrorModal = props => {
    
    return (
        <Modal
            onCancel={props.cancel}
            header="An error occured"
            show={!!props.error}
            footer={<Button onClick={props.clear}>Okay</Button>}
            >
            <p>{props.error}</p>
        </Modal>
    );
}

export default ErrorModal;