import React, { useContext } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import './Delete.css'

const Delete = () => {

    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();

    const deleteUser = (id) => {
        const user = users.filter(user => user.id != id);
        setUsers(user)
    }

    return (
        <div className='delete_modal'>
            <Card>
                <Card.Body>

                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Are You Sure?</Modal.Title>
                        </Modal.Header>

                        <Modal.Footer>
                            <Link to='/'>
                                <Button className='delete_btn' variant="info">Cancel</Button>
                                <Button
                                    onClick={() => deleteUser(id)}
                                    variant="danger">Delete</Button>
                            </Link>
                        </Modal.Footer>
                    </Modal.Dialog>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Delete;