import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageUser = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-g2z9.vercel.app/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    // signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json();
            })
            .then(data => setUsers(data));
    }, [users]);

    const makeAdmin = (email) => {
        fetch(`https://assignment-12-server-g2z9.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast('Failed to make an user admin',
                        {
                            icon: '❌',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        }
                    );
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Make user admin successfully',
                        {
                            icon: '✅',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        });
                }
            })
    }

    return (
        <div className='w-full mb-6 md:p-10 p-5 h-full'>
            <h1 className='text-3xl mb-2 text-neutral'>Manage User</h1>
            <span className='w-52 h-1 bg-secondary block md:mb-16 mb-10'></span>
            {users?.length > 0 ? <table className="table w-full">
                <thead className='text-center text-neutral rounded-lg bg-info border border-secondary' >
                    <tr className=''>
                        <th className='bg-info'>No</th>
                        <th className='bg-info'>Name</th>
                        <th className='bg-info'>Email</th>
                        <th className='bg-info'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center text-neutral rounded-lg bg-info border border-secondary'>
                    {users?.map(user => <tr key={user?._id}>
                        <td className='bg-info'>{users?.indexOf(user) + 1}</td>
                        <td className='bg-info'>{user?.userName}</td>
                        <td className='bg-info'>{user?.email}</td>
                        <th className='bg-info'>
                            {user?.role !== 'admin' ? <button onClick={() => makeAdmin(user?.email)} className="btn btn-secondary btn-sm table-cell w-40">Make Admin</button> : <p className='text-secondary'>Admin</p>}
                        </th>
                    </tr>)
                    }
                </tbody>
            </table> : 'No user found'}
        </div>
    );
};

export default ManageUser;