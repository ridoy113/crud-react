import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import './Delete.css'

const Delete = () => {

    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();
    
    const user = users.filter(user => user.id != id);

    return (
        <div>
            <h1>Delete Mama</h1>
        </div>
    );
};

export default Delete;