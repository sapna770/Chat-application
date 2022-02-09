import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-Id': "40c602d9-2a46-43d7-b161-1b9501ee31ab", 'User-Name': username, 'User-Secret': password };



        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject }).then(function (response) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);

                window.location.reload();
            });
        } catch (error) {

            setError('Oops, incorrect username or password')

        }
    }

    return (
        <div className=" h-screen flex flex-col gap-8 justify-center items-center bg-gradient-to-r from-sky-300 to-sky-800">
            <h1 className="font-bold text-2xl ">Chat Application</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 justify-center items-center">
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" required
                />
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" required
                />

                <button type="submit" className="shadow-xl w-48 rounded h-9 bg-sky-100 hover:bg-sky-700">
                    <span>Log in</span>
                </button>
                <h2 className="">{error}</h2>
            </form>

        </div>
    )
}

export default LoginForm;