import React, { useState, useEffect } from 'react';
import { useUser } from '../../utils/hooks/useUser';

function Profile({ currentUser }) {
    const { updateUser } = useUser();
    const [localUser, setLocalUser] = useState(currentUser);
    useEffect(() => {
        setLocalUser(currentUser);
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser({ userId: currentUser.userID, user: localUser });
    };
  return (
      <>
          <form onSubmit={handleSubmit}>
          <h1>Edit Profile</h1>
          <div>
            <div className="divider">
              <label>
                First Name
                          <input name="firstName" value={localUser.firstName} onChange={handleChange} />
              </label>
              <label>
                Last Name
                          <input name="lastName" value={localUser.lastName} onChange={handleChange} />
              </label>
            </div>
            <label>
              Email
                      <input name="email" value={localUser.email} onChange={handleChange} />
            </label>
            <label>
              Phone Number
                      <input name="phone" value={localUser.phone} onChange={handleChange} />
            </label>
          </div>
          <h2>Shipping Details</h2>
          <label>
            Address
                  <input name="address" value={localUser.address} onChange={handleChange} />
          </label>
          <div className="divider">
            <label>
              Postal Code
                      <input name="postalcode" value={localUser.postcalcode} onChange={handleChange} />
            </label>
            <label>
              City
                      <input name="city" value={localUser.city} onChange={handleChange} />
            </label>
          </div>
          <div className="divider">
            <button>SAVE CHANGES</button>
              </div>
          </form>
    </> 
  );
}

export default Profile;
