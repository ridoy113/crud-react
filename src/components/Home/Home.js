import React from 'react';
import { useContext } from 'react';
import { Button, Table } from 'react-bootstrap'
import { UserContext } from '../UserContext/UserContext';


const Home = () => {

    const [users, setUsers] = useContext(UserContext);


    return (
        <div>
            <Button variant="primary">Create User</Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.position}</td>
                                <td>{user.salary}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default Home;