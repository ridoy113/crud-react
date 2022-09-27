import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
        { id: 2, name: "Jonny", position: "MERN Dev", salary: 30000 },
        { id: 3, name: "Jon", position: "Full Stack Dev", salary: 40000 },
    ])
};