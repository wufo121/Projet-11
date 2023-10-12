import './EditNameModal.scss';
import { useSelector, useDispatch } from 'react-redux'; 
import { selectToken,  closeModal } from '../redux/userSlice';
import React, { useState, useEffect } from 'react';

function EditNameModal() {
    const token = useSelector(selectToken);
    const apiUrl = 'http://localhost:3001/api/v1/user/profile';
    
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeModal());
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUserName(userData.userName);
                    setFirstName(userData.firstName);
                    setLastName(userData.lastName);
                    console.log(userData)
                } else {
                    console.error('API request failed with status code:', response.status);
                }
            } catch (error) {
                console.error('Erreur lors de la connexion :', error);
            }
        }

        fetchData();
    }, [apiUrl, token]);

    return (
        <div className="ModalEditName" >
            <div htmlFor="EditNameLabel" className='EditName'> 
                <h2>Edit user info</h2>
                <div>
                    <label htmlFor="EditNameLabel">Username : </label>
                    <input
                        type="text"
                        id="EditNameLabel"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="EditFirstNameLabel">First Name: </label>
                    <input
                        type="text"
                        id="EditFirstNameLabel"
                        value={firstName}
                    />
                </div>
                <div>
                    <label htmlFor="EditLastNameLabel">Last Name: </label>
                    <input
                        type="text"
                        id="EditLastNameLabel"
                        value={lastName}
                    />
                </div>
                <div className='Buttons'>
                    <button>Save</button>
                    <button onClick={handleCloseModal}>Cancel</button> 
                </div>
            </div>
        </div>
    );
}

export default EditNameModal;