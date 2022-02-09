import React from 'react'

const LogoutForm = () => {
    const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.reload();
    };
    return (
        <div className="flex font-bold text-xl justify-start md:justify-between px-52 py-2 bg-sky-700 text-white bg-sky-600 cursor-pointer">
            <h3 >ChatApp</h3>
            <h3 onClick={logout}>Logout</h3>

        </div>
    );
}

export default LogoutForm;
