import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';


const MyOrder = () => {
  const [tools, setTools] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://assignment-12-server-g2z9.vercel.app/order/${user?.email}`, {
      method: 'GET',
      headers: {
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
      .then(data => setTools(data));
  }, [user, tools]);

  const deleteOrder = (id) => {
    const deleteStatus = window.confirm('Are you sure to delete this order?');
    if (deleteStatus) {
      fetch(`https://assignment-12-server-g2z9.vercel.app/order/${id}`, {
        method: 'DELETE',
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
          // console.log(data)
        })
    }
  }

  return (
    <div className='w-full md:p-10 p-5 h-full'>
      <h1 className='text-3xl mb-2 text-neutral'>My Orders</h1>
      <span className='w-52 h-1 bg-secondary block mb-16'></span>
      {tools?.length > 0 ? <table className="table w-full">
        <thead>
          <tr className='text-neutral text-center border border-secondary'>
            <th className='bg-info'>Item</th>
            <th className='md:block hidden bg-info'>Description</th>
            <th className='bg-info'>Price</th>
            <th className='bg-info'>Quantity</th>
            <th className='bg-info'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tools?.map(tool => <tr key={tool?._id} className="text-neutral border border-secondary">
              <td className='bg-info'>
                <div className="flex items-center sm:space-x-5 space-x-0">
                  <div className="avatar">
                    <div className="mask mask-squircle md:w-12 md:h-12 w-10 h-10">
                      <img src={tool?.productImage} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold sm:table-cell hidden">{tool?.productName}</div>
                    <div className="text-sm opacity-90 sm:inline-block hidden">ID: {tool?._id}</div>
                  </div>
                </div>
              </td>
              <td className='md:table-cell hidden bg-info'>{tool?.description.slice(0, 60) + '...'}</td>
              <td className='bg-info'>${tool?.price}</td>
              <td className='bg-info'>{tool?.quantity}</td>
              <th className='bg-info'>
                {!(tool?.paid) && <button onClick={() => deleteOrder(tool._id)} className="btn btn-error btn-sm lg:table-cell hidden mr-2 w-20">Delete</button>}
                {(tool?.price && !tool?.paid) && <Link to={`/dashboard/checkOut/${tool._id}`}><button className="btn btn-secondary btn-sm lg:table-cell hidden w-20">Pay</button></Link>}

                {(tool?.price && tool?.paid) &&

                  <div>
                    <div className="font-bold">
                      <button className="btn btn-secondary btn-sm w-20">Paid</button>
                    </div>
                    <div className="text-sm opacity-90 font-normal mt-2">TXN Id: {tool?.transactionId}</div>
                  </div>
                }

                <div className='flex justify-center items-center gap-2'>
                  {!(tool?.paid) && <svg onClick={() => deleteOrder(tool._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:hidden table-cell p-0 m-0 w-6 h-6 text-error">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>}

                  {(tool?.price && !tool?.paid) && <Link to={`/dashboard/checkOut/${tool._id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:hidden table-cell p-0 m-0 w-6 h-6 text-secondary">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </Link>}
                </div>
              </th>
            </tr>)
          }
        </tbody>
      </table> : <p className='text-2xl text-neutral'>Sorry 😞, You don't have any order</p>}
    </div>
  );
};
export default MyOrder;