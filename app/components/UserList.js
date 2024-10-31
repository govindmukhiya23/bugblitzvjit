import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]); // State to store user data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error messages

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data); // Set the fetched user data
            } catch (err) {
                setError(err.message); // Set the error message
            } finally {
                setLoading(false); // Set loading to false after the fetch is complete
            }
        };

        fetchUsers(); // Call the fetch function
    }, []); // Empty dependency array means this effect runs once when the component mounts

    if (loading) {
        return <p>Loading...</p>; // Show loading message while fetching
    }

    if (error) {
        return <p>Error: {error}</p>; // Show error message if there's an error
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;