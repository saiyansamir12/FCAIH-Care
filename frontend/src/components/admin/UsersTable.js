import userApi from '../../utils/api/userApi';
import React, { useEffect, useState } from 'react';
import { useUser } from '../../utils/hooks/useUser';

function Users() {
    const [data, setData] = useState([]);
    const { deleteUser: deleteUserHandler } = useUser();
    const handleDelete = async (userId) => {
        await deleteUserHandler(userId);
        // Refresh the data after deleting a user
        const users = await userApi.getUsers();
        setData(users);
    };

  useEffect(() => {
    const fetchData = async () => {
      const users = await userApi.getUsers();
      setData(users);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>UserID</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index}>
            <td>{user.userID}</td>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
                <td>{user.postalCode} {user.city} {user.address}</td>
                <td>
                    <button onClick={() => handleDelete(user.userID)}>Delete</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
