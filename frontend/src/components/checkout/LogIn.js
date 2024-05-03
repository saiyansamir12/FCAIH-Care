import React from 'react'
import { useUser } from "../../utils/hooks/useUser"
import Login from '../auth/LoginForm';
import { Link } from 'react-router-dom'; // import Link

function Account() {
    const { currentUser } = useUser();

    return (
        <div>
            {currentUser ? (
                <div>
                    <p>You are currently logged in as {currentUser.firstName}.</p>
                    {currentUser.role === 'admin' && <Link to="/admin">Go to Admin Panel</Link>} {/* Add this line */}
                </div>
            ) : (
                <div>
                    <Login />
                </div>
            )}
        </div>
    );
}

export default Account