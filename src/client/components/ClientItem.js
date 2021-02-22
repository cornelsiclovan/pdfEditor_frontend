import React from 'react';
import Card from '../../UIElements/Card';
import Button from '../../FormElements/Button';
import ErrorModal from '../../UIElements/ErrorModal';

import './ClientItem.css';

const ClientItem = props => {
    
    return (
        <React.Fragment>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__info">
                        <h2>{props.name}</h2>
                        <h2>{props.cnp}</h2>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
}

export default ClientItem;