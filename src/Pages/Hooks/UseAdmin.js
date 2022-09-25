import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';

const { useState, useEffect } = require("react");

const UseAdmin = (user) => {
    
        const [admin, setAdmin] = useState(false);
        const [adminLoading, setAdminLoading] = useState(true);
    
        useEffect(() => {
            const userEmail = user?.email;
            if (userEmail) {
                fetch(`https://assignment-12-server-g2z9.vercel.app/admin/${userEmail}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => {
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth);
                            localStorage.removeItem('accessToken');
                        }
                        return res.json();
                    })
                    .then(data => {
                        setAdmin(data);
                        setAdminLoading(false);
                    });
            }
        }, [user]);
    
        return [admin, adminLoading];
    }

export default UseAdmin;