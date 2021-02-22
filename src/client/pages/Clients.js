import React from 'react';
import ClientList from '../components/ClientList';

const Clients = () => {
    const clients = [
        {
            "id": 1,
            "name": "cornel siclovan",
            "cnp": "123493423876"
        },
        {
            "id": 2,
            "name": "popescu ion",
            "cnp": "123493423876"
        },
    ];

    return (
        <React.Fragment>
            <ClientList items={clients} />
        </React.Fragment>
    );
}

export default Clients;